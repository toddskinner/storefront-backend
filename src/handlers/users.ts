import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user';
import jwt from 'jsonwebtoken';
import verifyToken from './../middleware/verifyToken';

const store = new UserStore();

const index = async (req: Request, res: Response) => {
  const users = await store.index();
  res.json(users);
};

const show = async (req: Request, res: Response) => {
  const user = await store.show(req.params.id);
  res.json(user);
};

// https://stackoverflow.com/questions/66328425/jwt-argument-of-type-string-undefined-is-not-assignable-to-parameter-of-typ

const create = async (req: Request, res: Response) => {
  const user: User = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
  };

  try {
    const newUser = await store.create(user);
    var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET!);
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err + user);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const deleted = await store.delete(req.params.id);
    res.json(deleted);
  } catch (error) {
    res.status(400);
    res.json({ error });
  }
};

const user_routes = (app: express.Application) => {
  app.get('/users', verifyToken, index);
  app.get(`/users/:id`, verifyToken, show);
  app.post('/users', create);
  app.delete(`/users/delete/:id`, verifyToken, destroy);
};

export default user_routes;

// const destroy = async (req: Request, res: Response) => {
//   const deleted = await store.delete(req.body.id);
//   res.json(deleted);
// };

// const update = async (req: Request, res: Response) => {
//   const user: User = {
//     id: parseInt(req.params.id),
//     username: req.body.username,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     password: req.body.password,
//   };
//   try {
//     const authorizationHeader = req.headers.authorization!;
//     const token = authorizationHeader.split(' ')[1];
//     const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
//     if (decoded.split()[0].id !== user.id) {
//       // https://knowledge.udacity.com/questions/656889
//       throw new Error('User id does not match!');
//     }
//   } catch (err) {
//     res.status(401);
//     res.json(err);
//     return;
//   }

//   try {
//     const updated = await store.create(user);
//     res.json(updated);
//   } catch (err) {
//     res.status(400);
//     res.json(err + user);
//   }
// };
