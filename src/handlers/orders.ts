import express, { Request, Response } from 'express';
import { Order, OrderStore } from '../models/order';
import jwt from 'jsonwebtoken';
import verifyToken from './../middleware/verifyToken';

const store = new OrderStore();

const index = async (_req: Request, res: Response) => {
  const orders = await store.index();
  res.json(orders);
};

const show = async (req: Request, res: Response) => {
  const order = await store.show(req.body.id);
  res.json(order);
};

const create = async (req: Request, res: Response) => {
  try {
    const authorizationHeader = req.headers.authorization!;
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET!);
  } catch (err) {
    res.status(401);
    res.json('Access denied, invalid token');
    return;
  }

  try {
    const order: Order = {
      status: req.body.status,
      user_id: req.body.user_id,
    };

    const newOrder = await store.create(order);
    res.json(newOrder);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const addProduct = async (req: Request, res: Response) => {
  // check if this should be .id or .order_id
  const order_id: string = req.params.id;
  const product_id: string = req.body.product_id;
  const quantity: number = parseInt(req.body.quantity);

  try {
    const authorizationHeader = req.headers.authorization!;
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET!);
  } catch (err) {
    res.status(401);
    res.json('Access denied, invalid token');
    return;
  }

  try {
    const addedProduct = await store.addProduct(order_id, product_id, quantity)
    res.json(addedProduct)
  } catch(err) {
    res.status(400)
    res.json(err)
  }
};

const currentOrderAndProducts = async (req: Request, res: Response) => {
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
    const newOrder = await store.getCurrentOrderAndProducts(req.body.user_id);
    res.json(newOrder);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const authorizationHeader = req.headers.authorization!;
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET!);
  } catch (err) {
    res.status(401);
    res.json('Access denied, invalid token');
    return;
  }

  try {
    const deleted = await store.delete(req.body.id);
    res.json(deleted);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
};

const order_routes = (app: express.Application) => {
  app.get('/orders/current/{:user_id}', verifyToken, currentOrderAndProducts);
};

export default order_routes;
