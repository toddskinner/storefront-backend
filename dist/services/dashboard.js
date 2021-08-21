"use strict";
// UNUSED: KEPT FOR REFERENCE
// import Client from '../database';
// export class DashboardQueries {
//  // Get all products included in the user's current/active order
//  async getCurrentOrderAndProducts(user_id: string): Promise<{ order_id: string; status: string; user_id: string; name: string; product_id: string; quantity: number; price: number;}[]> {
//     try {
//       //@ts-ignore
//       const conn = await Client.connect();
//       const sql = 
//         'SELECT order_id, status, user_id, name, product_id, quantity, price FROM order_products INNER JOIN products ON order_products.product_id = products.id INNER JOIN orders ON order_products.order_id = orders.id WHERE orders.user_id=($1) AND orders.status=($2)';  
//       const result = await conn.query(sql, [user_id, 'active']);
//       conn.release();
//       return result.rows;
//     } catch (err) { 
//       throw new Error(`unable get products and orders: ${err}`);
//     }
//   }
// }
// // async getUsersCurrentOrder(user_id: string): Promise<void> {
// //     try {
// //       //@ts-ignore
// //       const conn = await Client.connect();
// //       const sql =
// //         'SELECT id FROM orders WHERE user_id=${1} AND status=($2) AND ORDER BY id DESC LIMIT 1';
// //       const result = await conn.query(sql, [user_id, 'active']);
// //       conn.release();
// //       this.getProductsInCurrentOrder(result.rows[0].id);
// //     } catch (err) {
// //       throw new Error(`unable get users with orders: ${err}`);
// //     }
// //   }
// //   async getProductsInCurrentOrder(order_id: string): Promise<
// //   { order_id: string; name: string; product_id: string; quantity: number; price: number; }[]
// //   > {
// //     try {
// //       //@ts-ignore
// //       const conn = await Client.connect();
// //       const sql =
// //         'SELECT order_id, name, product_id, quantity, price FROM products INNER JOIN order_products ON product.id = order_products.id WHERE order_products.order_id=($1)';
// //       const result = await conn.query(sql, [order_id]);
// //       conn.release();
// //       return result.rows;
// //     } catch (err) {
// //       throw new Error(`unable get users with orders: ${err}`);
// //     }
// //   }
// //   // Get the five most expensive products
// //   async fiveMostExpensive(): Promise<{ name: string; price: number }[]> {
// //     try {
// //       //@ts-ignore
// //       const conn = await Client.connect();
// //       const sql =
// //         'SELECT name, price FROM products ORDER BY price DESC LIMIT 5';
// //       const result = await conn.query(sql);
// //       conn.release();
// //       return result.rows;
// //     } catch (err) {
// //       throw new Error(`unable get products by price: ${err}`);
// //     }
// //   }
// //   // Get all products that have been included in orders
// //   async productsInOrders(): Promise<
// //     { name: string; price: number; order_id: string }[]
// //   > {
// //     try {
// //       //@ts-ignore
// //       const conn = await Client.connect();
// //       const sql =
// //         // 'SELECT name, price, order_id FROM products INNER JOIN order_products ON product.id = order_products.id';
// //         // 'SELECT name, price, product_id FROM products INNER JOIN order_products ON order.id = order_products.order_id'
// //         'SELECT product.name, product.price, quantity, order.status, order.user_id, order_id, product_id FROM order_products INNER JOIN products ON order_products.product_id = product.id INNER JOIN orders ON order_products.order_id = order.id WHERE order.user_id=($1)';  
// //       const result = await conn.query(sql);
// //       conn.release();
// //       return result.rows;
// //     } catch (err) {
// //       throw new Error(`unable get products and orders: ${err}`);
// //     }
// //   }
// //   async usersWithOrders(): Promise<{ username: string }[]> {
// //     try {
// //       //@ts-ignore
// //       const conn = await Client.connect();
// //       const sql =
// //         'SELECT username FROM users INNER JOIN orders ON users.id = orders.user_id';
// //       const result = await conn.query(sql);
// //       conn.release();
// //       return result.rows;
// //     } catch (err) {
// //       throw new Error(`unable get users with orders: ${err}`);
// //     }
// //   }
