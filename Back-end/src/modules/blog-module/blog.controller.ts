import { DATA_TYPE, getDataRequest } from "../../middlewares/getData.middleware";
import { UserModel } from "../user-module/user.model";
import { ICreateBlog } from "./blog.model";
import { BlogService } from "./blog.service";
import { Request, Response } from 'express';

export async function allBlog(req: Request, res: Response) {
    try {
        return res.status(200).send(await BlogService.findAllPost()).end();
    } catch (err) {
        console.log({ allBlog: err });
        return res.status(400).send(err).end();
    }
}



export async function createBlog(req: Request, res: Response) {
    try {
        const body = getDataRequest(req, DATA_TYPE.BODY) as ICreateBlog
        const blog = await BlogService.createBlog(body)
        const update = await UserModel.findByIdAndUpdate(body?.author, { $push: { post: blog?.id } })
        return res.status(200).send(blog).end();
    } catch (err) {
        console.log({ allBlog: err });
        return res.status(400).send(err).end();
    }
}

export async function findBlog(req: Request, res: Response) {
    try {
        const search = getDataRequest(req, DATA_TYPE.QUERY)?.search
        return res.status(200).send(await BlogService.findBlog(search)).end();
    } catch (err) {
        console.log({ findBlog: err });
        return res.status(400).send(err).end();
    }
}

export async function detailBlog(req: Request, res: Response) {
    try {
        const search = getDataRequest(req, DATA_TYPE.PARAM)?.id
        return res.status(200).send(await BlogService.findById(search)).end();
    } catch (err) {
        console.log({ findBlog: err });
        return res.status(400).send(err).end();
    }
}


