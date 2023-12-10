import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { config } from 'dotenv';
import { Request, Response } from 'express';
import { JwtMiddleware, refreshToken } from '../../middlewares/jwt.middleware';
import { UserService } from './user.service';
import { DATA_TYPE, getDataRequest } from "../../middlewares/getData.middleware";

config();
const Jwt = new JwtMiddleware(
    process.env.SECRET_KEY as string,
    process.env.SECRET_REFRESH_KEY as string,
    process.env.SECRET_REGISTER_KEY as string,
);

export async function listUsers(req: Request, res: Response) {
    try {
        return res.status(200).send(await UserService.findAllUsers()).end();
    } catch (err) {
        console.log({ listUsers: err });
        return res.status(400).send(err).end();
    }
}

export async function detailUser(req: Request, res: Response) {
    try {
        return res.status(200).send(await UserService.findById(req.params.id)).end();
    } catch (err) {
        console.log({ listUsers: err });
        return res.status(400).send(err).end();
    }
}

export async function register(req: Request, res: Response) {
    try {
        const body = req.body;
        if (!body) return res.status(40).send({ message: "Body is required" });
        const findUser = await UserService.findByEmail(body.email)
        if (findUser?.id) return res.status(400).send({ message: "User existed" }).end();
        const salt = genSaltSync(Number(process.env.SALT as string));
        const hash = hashSync(body.password, salt);
        await UserService.createUser({ ...body, password: hash });
        return res.status(200).send({ message: "Register successfully" }).end();
    } catch (err) {
        console.log({ register: err });
        return res.status(400).send(err).end();
    }
}

export async function login(req: Request, res: Response) {
    try {
        const body = req.body;
        if (!body) return res.status(40).send({ message: "Body is required" });
        const user = await UserService.findByEmail(body.email);
        if (!user) return res.status(400).send({ message: "User not found" }).end();
        if (compareSync(body.password, user?.password as string)) {
            const payload = {
                id: user?.id as string,
                email: user?.email as string,
                name: user?.name as string,
                active: user?.active as boolean
            }
            const token = Jwt.accessToken(payload);
            const refreshToken = Jwt.refreshToken(payload);

            return res.status(200).send({ user, token, refreshToken }).end();
        } else {
            return res.status(400).send({ message: "Invalid password" }).end();
        }
    } catch (err) {
        console.log({ login: err });
        return res.status(400).send(err).end();
    }
}

export function userRefreshToken(req: Request, res: Response) {
    return refreshToken(req, res);
}

export async function allMyBlog(req: Request, res: Response) {
    try {
        const id = getDataRequest(req, DATA_TYPE.PARAM)?.id
        return res.status(200).send(await UserService.findAllPostsOfUser(id)).end();
    } catch (err) {
        console.log({ allBlog: err });
        return res.status(400).send(err).end();
    }
}