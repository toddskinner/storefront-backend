import express, { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';
import jwt from 'jsonwebtoken';
import verifyToken from './../middleware/verifyToken';

const store = new ProductStore();

const index = async (_req: Request, res: Response) => {
  const products = await store.index();
  res.json(products);
};

const show = async (req: Request, res: Response) => {
  const product = await store.show(req.body.id);
  res.json(product);
};

const productsByCategory = async (req: Request, res: Response) => {
  const products = await store.productsByCategory(req.body.category);
  res.json(products);
};

const create = async (req: Request, res: Response) => {
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
    const product: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const newProduct = await store.create(product);
    res.json(newProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const product_routes = (app: express.Application) => {
  app.get('/products', index);
  app.get('/products/{:id}', show);
  app.post('/products', verifyToken, create);
  app.get('/products/{:category}', productsByCategory);
  // app.delete('/products/{:id}', destroy);
};

export default product_routes;

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


