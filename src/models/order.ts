import Client from '../database';

export type Order = {
  id?: number | string;
  status: string;
  user_id: number | string;
};

export class OrderStore {
  async index(): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get orders. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Order> {
    try {
      const sql = 'SELECT * FROM orders WHERE id=($1)';
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find order ${id}. Error: ${err}`);
    }
  }

  async create(o: Order): Promise<Order> {
    try {
      const sql =
        'INSERT INTO orders (status, user_id) VALUES($1, $2) RETURNING *';
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [o.status, o.user_id]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (err) {
      throw new Error(`Could not create order ${o.id}. Error: ${err}`);
    }
  }

  async addProduct(
    order_id: string,
    product_id: string,
    quantity: number
  ): Promise<{
    id: number;
    order_id: string;
    product_id: string;
    quantity: number;
  }> {
    // get order to see if it is active, FOR REFERENCE 
    // try {
    //   const ordersql = 'SELECT * FROM orders WHERE id=($1)';
    //   //@ts-ignore
    //   const conn = await Client.connect();

    //   const result = await conn.query(ordersql, [order_id]);

    //   const order = result.rows[0];

    //   if (order.status !== 'active') {
    //     throw new Error(
    //       `Could not add product ${product_id} to order ${order_id} because order status is ${order.status}`
    //     );
    //   }

    //   conn.release();
    // } catch (err) {
    //   throw new Error(`${err}`);
    // }

    try {
      const sql =
        'INSERT INTO order_products (order_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *';
      //@ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [order_id, product_id, quantity]);

      const addedProduct = result.rows[0];

      conn.release();

      return addedProduct;
    } catch (err) {
      throw new Error(
        `Could not add product ${product_id} to order ${order_id}: ${err}`
      );
    }
  }

  async delete(id: string): Promise<Order> {
    try {
      const sql = 'DELETE FROM orders WHERE id=($1)';
      
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (err) {
      throw new Error(`Could not delete order ${id}. Error: ${err}`);
    }
  }

  async getCurrentOrderAndProducts(
    user_id: string
  ): Promise<
    {
      order_id: string;
      status: string;
      user_id: string;
      name: string;
      product_id: string;
      quantity: number;
      price: number;
    }[]
  > {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      const sql =
        'SELECT order_id, status, user_id, name, product_id, quantity, price FROM order_products INNER JOIN products ON order_products.product_id = products.id INNER JOIN orders ON order_products.order_id = orders.id WHERE orders.user_id=($1) AND orders.status=($2)';

      const result = await conn.query(sql, [user_id, 'active']);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`unable get products and orders: ${err}`);
    }
  }

  async removeProductFromOrder(order_id: string, product_id: string): Promise<
  {
    id: number;
    order_id: string;
    product_id: string;
    quantity: number;}
  > {
    try {
      const sql = 'DELETE FROM order_products WHERE order_id=($1) AND product_id=($2)';
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [order_id, product_id]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (err) {
      throw new Error(`Could not delete product ${product_id} from order ${order_id}. Error: ${err}`);
    }
  }

  // ONLY USED FOR TESTING removeProductFromOrder so no associated endpoint or test
  async indexOrderProductsTable(): Promise<{
      id: number,
      quantity: number;
      order_id: string;
      product_id: string;
  }[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM order_products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get orders. Error: ${err}`);
    }
  }
}
