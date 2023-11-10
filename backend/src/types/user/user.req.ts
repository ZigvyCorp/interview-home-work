import { IUser } from "./user.type";
import { Request } from "express";

export interface IReqAuth extends Request {
	username?: IUser;
}
