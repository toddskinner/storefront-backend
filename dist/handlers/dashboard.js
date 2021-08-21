"use strict";
// UNUSED: KEPT FOR REFERENCE
// import express, { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import { DashboardQueries } from '../services/dashboard';
// const dashboard_routes = (app: express.Application) => {
//   app.get('/current-order/:user_id', currentOrderAndProducts);
// };
// const dashboard = new DashboardQueries();
// const currentOrderAndProducts = async (req: Request, res: Response) => {
//     try {
//       const authorizationHeader = req.headers.authorization!;
//       const token = authorizationHeader.split(' ')[1];
//       jwt.verify(token, process.env.TOKEN_SECRET!);
//     } catch (err) {
//       res.status(401);
//       res.json('Access denied, invalid token');
//       return;
//     }
//     try {
//       const newOrder = await dashboard.getCurrentOrderAndProducts(req.body.user_id);
//       res.json(newOrder);
//     } catch (err) {
//       res.status(400);
//       res.json(err);
//     }
// };
//   // const usersCurrentOrder = async (req: Request, res: Response) => {
// //   const users = await dashboard.getUsersCurrentOrder(req.body.id);
// //   res.json(users);
// // };
// // const currentActiveOrderAndProducts = async (req: Request, res: Response) => {
// //   const products = await dashboard.getCurrentActiveOrderAndProducts(req.body.id);
// //   res.json(products);
// // };
// export default dashboard_routes;
