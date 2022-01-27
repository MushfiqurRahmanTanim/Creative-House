import { Request } from "express";
import mongoose from "mongoose";
type mongoose_id = string | mongoose.Types.ObjectId;

export interface ExtendedRequest extends Request {
  // not Express.Request 👆
  user: any;
  file: any;
}

export interface IUser{ 
  _id: mongoose_id;
  username: string;
  name: string,
  email: string,
  password: string,
  timestamps:Boolean,
  checkPassword?: (password: string) => Promise<boolean>

}