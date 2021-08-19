import express, { Request, Response } from 'express';

import { DashboardQueries } from '../services/dashboard';

const dashboard_routes = (app: express.Application) => {
  app.get('/products-in-orders', productsInOrders);
  app.get('/users-with-orders', usersWithOrders);
  app.get('/five-most-expensive', fiveMostExpensive);
};

const dashboard = new DashboardQueries();

const usersWithOrders = async (_req: Request, res: Response) => {
  const users = await dashboard.usersWithOrders();
  res.json(users);
};

const productsInOrders = async (_req: Request, res: Response) => {
  const products = await dashboard.productsInOrders();
  res.json(products);
};

const fiveMostExpensive = async (_req: Request, res: Response) => {
  const users = await dashboard.fiveMostExpensive();
  res.json(users);
};

export default dashboard_routes;
