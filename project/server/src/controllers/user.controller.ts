import { Prisma, PrismaClient } from '@prisma/client'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { userRegister } from "../dto/userRegister.dto";
import { encodePassword, isMatches } from "../utils/password";
import {Request,Response } from "express";
import { JwtPayload } from 'jsonwebtoken';
import jwt from "jsonwebtoken";
import { Token } from '../types/token.type';
import 'dotenv/config'

const userController = {
  signUp: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient()

      const authDto: userRegister =req.body;
      const hash = await encodePassword(authDto.password);
      delete authDto['password'];

      const user = await prisma.user
        .create({
          data: {
            ...authDto,
            hash,
          },
        })
        .catch((error:any) => {
          if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
              throw new Error('Email or username or numberPhone is exist');
            }
          }
          throw new Error('BROKEN');
        });
        let result:any =await user;
      const tokens = await userController.getTokens(result.id, result.email, result.name);

      await userController.updateRtHash(result.id, tokens.refresh_token);

      return res.status(200).json(tokens);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  signIn: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient()
      const authDto: userRegister =req.body;
      const user = await prisma.user.findUnique({ where: { email :authDto.email} });
      if (!user) return res.status(400).json({message:"Email Not found"});
      const passwordMatches = isMatches(authDto.password,user.hash);
      if (!passwordMatches)  return res.status(400).json({message:"Wrong Password"});
      const tokens = await userController.getTokens(user.id, user.email,user.name);
      await userController.updateRtHash(user.id, tokens.refresh_token);
      return res.status(200).json(tokens);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  info: async (req: Request, res: Response) => {
    try {
      const userdata:JwtPayload = req.user;
      const prisma = new PrismaClient()
      const user = await prisma.user.findUnique({ where: { email :userdata.email} ,  include: { Address: true ,Company:true},
      });
      if (!user) return res.status(400).json({message:"Email Not found"});
      delete user['hash'];
      delete user['rt_hash'];
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  logout: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient()
      const userFromJWT:JwtPayload = req.user
      const user = await prisma.user.updateMany({
        where: {
          id: userFromJWT.id,
          rt_hash: {
            not: null,
          },
        },
        data: {
            rt_hash: null,
        },
      });
      return res.status(200).json({messsage:"Logout Success!"});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  refreshToken: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient()
      const userFromJWT:JwtPayload = req.user
      const {refresh_token} = req.body
      const user = await prisma.user.findUnique({
        where: {
          id: userFromJWT.id,
        },
      });
      if (!user || !user.rt_hash) return res.status(400).json({messsage:'Access Denied !'});
      const rtMatches = await isMatches(refresh_token,user.rt_hash);
      if (!rtMatches) return res.status(400).json({messsage:'Access Denied !'});
      const tokens = await userController.getTokens(user.id, user.email,user.name);
      await userController.updateRtHash(user.id, tokens.refresh_token);
      return res.status(200).json(tokens);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async getTokens(userId: number, email: string, name: string): Promise<Token> {
    const jwtPayload: JwtPayload = {
      sub: userId.toString(),
      email: email,
      name: name,
    };
    const [at, rt] = await Promise.all([
      jwt.sign(jwtPayload, 
        process.env.JWT_TOKEN_SECRET,
        {expiresIn:process.env.EXPIRES_TIME }
      ),
      jwt.sign(jwtPayload, 
        process.env.JWT_REFRESH_SECRET,
        {expiresIn:process.env.EXPIRES_TIME_R }
      ),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
    };
  },
  async updateRtHash(userId: number, rt: string): Promise<void> {
    const prisma = new PrismaClient()
    const hash = await encodePassword(rt);

     await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        rt_hash: hash,
      },
    });
    console.log(rt);

  },
  

};



export default userController;
