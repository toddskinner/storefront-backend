"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../models/product");
const verifyToken_1 = __importDefault(require("./../middleware/verifyToken"));
const store = new product_1.ProductStore();
const index = async (_req, res) => {
    const products = await store.index();
    res.json(products);
};
const show = async (req, res) => {
    const product = await store.show(req.body.id);
    res.json(product);
};
const productsByCategory = async (req, res) => {
    const products = await store.productsByCategory(req.body.category);
    res.json(products);
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
        const product = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        };
        const newProduct = await store.create(product);
        res.json(newProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const product_routes = (app) => {
    app.get('/products', index);
    app.get('/products/{:id}', show);
    app.post('/products', verifyToken_1.default, create);
    app.get('/products/{:category}', productsByCategory);
    // app.delete('/products/{:id}', destroy);
};
exports.default = product_routes;
// const destroy = async (req: Request, res: Response) => {
//   try {
//     const authorizationHeader = req.headers.authorization!;
//     const token = authorizationHeader.split(' ')[1];
//     jwt.verify(token, process.env.TOKEN_SECRET!);
//   } catch (err) {
//     res.status(401);
//     res.json('Access denied, invalid token');
//     return;
//   }
//   try {
//     const deleted = await store.delete(req.body.id);
//     res.json(deleted);
//   } catch (error) {
//     res.status(400);
//     res.json({ error });
//   }
// };
