"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrderStore {
    async index() {
        try {
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM orders';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Cannot get orders. Error: ${err}`);
        }
    }
    async show(id) {
        try {
            const sql = 'SELECT * FROM orders WHERE id=($1)';
            // @ts-ignore
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not find order ${id}. Error: ${err}`);
        }
    }
    async create(o) {
        try {
            const sql = 'INSERT INTO orders (status, user_id) VALUES($1, $2) RETURNING *';
            // @ts-ignore
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [o.status, o.user_id]);
            const order = result.rows[0];
            conn.release();
            return order;
        }
        catch (err) {
            throw new Error(`Could not create order ${o.id}. Error: ${err}`);
        }
    }
    async addProduct(order_id, product_id, quantity) {
        // get order to see if it is active
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
            const sql = 'INSERT INTO order_products (order_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *';
            //@ts-ignore
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [order_id, product_id, quantity]);
            const addedProduct = result.rows[0];
            conn.release();
            return addedProduct;
        }
        catch (err) {
            throw new Error(`Could not add product ${product_id} to order ${order_id}: ${err}`);
        }
    }
    async delete(id) {
        try {
            const sql = 'DELETE FROM orders WHERE id=($1)';
            // @ts-ignore
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            const order = result.rows[0];
            conn.release();
            return order;
        }
        catch (err) {
            throw new Error(`Could not delete order ${id}. Error: ${err}`);
        }
    }
    async getCurrentOrderAndProducts(user_id) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT order_id, status, user_id, name, product_id, quantity, price FROM order_products INNER JOIN products ON order_products.product_id = products.id INNER JOIN orders ON order_products.order_id = orders.id WHERE orders.user_id=($1) AND orders.status=($2)';
            const result = await conn.query(sql, [user_id, 'active']);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`unable get products and orders: ${err}`);
        }
    }
    async removeProductFromOrder(id) {
        try {
            const sql = 'DELETE FROM order_products WHERE id=($1)';
            // @ts-ignore
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            const order = result.rows[0];
            conn.release();
            return order;
        }
        catch (err) {
            throw new Error(`Could not delete order ${id}. Error: ${err}`);
        }
    }
}
exports.OrderStore = OrderStore;
