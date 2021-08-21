import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// since not a function that is part of Express, it does not have type definitions by default. 
// So we have to add them.
const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const authorizationHeader = req.headers.authorization!;
        const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET!);
      } catch (err) {
        res.status(401);
        res.json('Access denied, invalid token');
        return;
      }
};

export default verifyToken;
