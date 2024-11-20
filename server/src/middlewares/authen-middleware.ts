import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IResponse } from "../interfaces/response-interface";


export interface UserRequest extends Request {
    user_id?: string;
  }

class AuthenMiddleware {
  static authenMiddleware = async (req: UserRequest, res: Response, next: NextFunction) => {
    try{

        let token: any;
        if (req?.headers?.authorization?.startsWith("Bearer")) 
        {
            token = req.headers.authorization.split(" ")[1];
            if(token)
            {   
                try{
                    const decode = await jwt.verify(
                        token,
                        `${process.env.JWT_SECRET_KEY}`
                    ) as JwtPayload;
                    
                    req.user_id = decode.id
                    next();
                }
                catch(err)
                {
                   res.status(200).json({
                    type: "Error",
                    code: 400,
                    message: "Invalid token"
                    } as IResponse);
                }
                
            }
        }
        else{
            res.status(200).json({
                type: "Error",
                code: 400,
                message: "No token in headers"
            } as IResponse);
        }
        
        
       
    }
    catch(err){
        res.status(200).json({
            type: "Error",
            code: 400,
            message: "Token expired, please login again"
        } as IResponse) 
    }

}
};

export default AuthenMiddleware;
