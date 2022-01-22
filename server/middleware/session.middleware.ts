import { NextFunction, Request, Response } from "express";
import session from 'express-session';

const sessionMiddleware =(req:Request, res:Response, next:NextFunction) => {

       return session({
        secret: 'keyboard cat',
        resave:false,
        saveUninitialized:true,
       })(req, res, next);
}

export default sessionMiddleware