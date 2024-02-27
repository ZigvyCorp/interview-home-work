import { UserService } from '../service';
import { Request, Response } from 'express';

export const sayHello = (req: Request, res: Response) => {
    const mess = UserService.sayHello();
    return res.status(200).json(mess);
};
