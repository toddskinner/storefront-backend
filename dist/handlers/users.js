"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken_1 = __importDefault(require("./../middleware/verifyToken"));
const store = new user_1.UserStore();
const index = async (req, res) => {
    // try {
    //   const authorizationHeader = req.headers.authorization!;
    //   const token = authorizationHeader.split(' ')[1];
    //   jwt.verify(token, process.env.TOKEN_SECRET!);
    // } catch (err) {
    //   res.status(401);
    //   res.json('Access denied, invalid token');
    //   return;
    // }
    const users = await store.index();
    res.json(users);
};
const show = async (req, res) => {
    // try {
    //   const authorizationHeader = req.headers.authorization!;
    //   const token = authorizationHeader.split(' ')[1];
    //   jwt.verify(token, process.env.TOKEN_SECRET!);
    // } catch (err) {
    //   res.status(401);
    //   res.json('Access denied, invalid token');
    //   return;
    // }
    const user = await store.show(req.body.id);
    res.json(user);
};
// https://stackoverflow.com/questions/66328425/jwt-argument-of-type-string-undefined-is-not-assignable-to-parameter-of-typ
const create = async (req, res) => {
    const user = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
    };
    try {
        const newUser = await store.create(user);
        var token = jsonwebtoken_1.default.sign({ user: newUser }, process.env.TOKEN_SECRET);
        res.json(token);
    }
    catch (err) {
        res.status(400);
        res.json(err + user);
    }
};
const authenticate = async (req, res) => {
    // const user: User = {
    //   username: _req.body.username,
    //   firstname: _req.body.firstname,
    //   lastname: _req.body.lastname,
    //   password: _req.body.password,
    // };
    try {
        // let password:string = user.password!;
        const u = await store.authenticate(req.body.username, req.body.password);
        var token = jsonwebtoken_1.default.sign({ user: u }, process.env.TOKEN_SECRET);
        res.json(token);
    }
    catch (err) {
        res.status(401);
        res.json(err + req.body.username);
    }
};
const user_routes = (app) => {
    app.get('/users', verifyToken_1.default, index);
    app.get(`/users/{:id}`, verifyToken_1.default, show);
    app.post('/users', create);
    app.post('/users/authenticate', authenticate);
    // app.delete(`/users/{:id}`, destroy);
};
exports.default = user_routes;
// const destroy = async (req: Request, res: Response) => {
//   const deleted = await store.delete(req.body.id);
//   res.json(deleted);
// };
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
