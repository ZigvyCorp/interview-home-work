import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
interface BaseController {
  getName(req: Request, Res: Response): string;
}

class Base implements BaseController {
  getName(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    Res: Response<any, Record<string, any>>,
  ): string {
    throw new Error('Method not implemented.');
  }
}
