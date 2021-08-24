"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../models/order");
const verifyToken_1 = __importDefault(require("./../middleware/verifyToken"));
const store = new order_1.OrderStore();
const index = async (_req, res) => {
    const orders = await store.index();
    res.json(orders);
};
const show = async (req, res) => {
    const order = await store.show(req.params.id);
    res.json(order);
};
const create = async (req, res) => {
    // try {
    //   const authorizationHeader = req.headers.authorization!;
    //   const token = authorizationHeader.split(' ')[1];
    //   jwt.verify(token, process.env.TOKEN_SECRET!);
    // } catch (err) {
    //   res.status(401);
    //   res.json('Access denied, invalid token');
    //   return;
    // }
    try {
        const order = {
            status: req.body.status,
            user_id: req.body.user_id,
        };
        const newOrder = await store.create(order);
        res.json(newOrder);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const addProduct = async (req, res) => {
    // check if this should be .id or .order_id
    const order_id = req.params.order_id;
    const product_id = req.body.product_id;
    const quantity = parseInt(req.body.quantity);
    // try {
    //   const authorizationHeader = req.headers.authorization!;
    //   const token = authorizationHeader.split(' ')[1];
    //   jwt.verify(token, process.env.TOKEN_SECRET!);
    // } catch (err) {
    //   res.status(401);
    //   res.json('Access denied, invalid token');
    //   return;
    // }
    try {
        const addedProduct = await store.addProduct(order_id, product_id, quantity);
        res.json(addedProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const currentOrderAndProducts = async (req, res) => {
    try {
        const newOrder = await store.getCurrentOrderAndProducts(req.params.user_id);
        res.json(newOrder);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const removeProductFromOrder = async (req, res) => {
    const order_id = req.params.order_id;
    const product_id = req.params.product_id;
    try {
        const deleted = await store.removeProductFromOrder(order_id, product_id);
        res.json(deleted);
    }
    catch (error) {
        res.status(400);
        res.json({ error });
    }
};
const destroy = async (req, res) => {
    try {
        const deleted = await store.delete(req.params.id);
        res.json(deleted);
    }
    catch (error) {
        res.status(400);
        res.json({ error });
    }
};
const order_routes = (app) => {
    app.get('/orders', verifyToken_1.default, index);
    app.get(`/orders/:id`, verifyToken_1.default, show);
    app.post('/orders', verifyToken_1.default, create);
    app.post('/orders/:order_id/add', verifyToken_1.default, addProduct);
    app.get('/orders/current/:user_id', verifyToken_1.default, currentOrderAndProducts);
    app.delete(`/orders/:order_id/remove/:product_id`, verifyToken_1.default, removeProductFromOrder);
    app.delete(`/orders/delete/:id`, verifyToken_1.default, destroy);
};
exports.default = order_routes;
