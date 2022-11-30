import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { postDto } from "../dto/postCreate.dto";
import { Request, Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtPayload } from "jsonwebtoken";
import { postUpdateDto } from "../dto/updatePost.dto";

const postController = {
  getAllPost:async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient();
      const post = await prisma.post
        .findMany({
        })
  
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getPost:async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient();
      const post = await prisma.post
        .findMany({
          where:{
            id:Number.parseInt(req.params.id)
          },
          include:{
            comments:true
          }
        })
      if(post.length === 0) return res.status(400).json({message:"post not exist"});
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createPost: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient();
      const postDto: postDto = req.body;
      const userdata: JwtPayload = req.user;
      const post = await prisma.post
        .create({
          data: {
            ...postDto,
            userId: Number.parseInt(userdata.sub),
          },
        })
        .catch((error: any) => {
          if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
              throw new Error("BROKEN");
            }
          }
          throw new Error("BROKEN");
        });
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  editPost: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient();
      const postDto: postUpdateDto = req.body;
      const userdata: JwtPayload = req.user;
      const post = await prisma.post.findUnique({
        where: {
          id: Number.parseInt(req.params.id),
        },
      });
      if (!post) return res.status(400).json({ message: "post not exist" });
      if (post.userId!=Number.parseInt(userdata.sub)) return res.status(400).json({ message: "access denined !" });
      const postUpdate = await prisma.post.updateMany({
        where: {
          id: Number.parseInt(req.params.id),
        },
        data:{
          body :postDto.body,
          title:postDto.title
        }
      });
      return res.status(200).json({ message: "edit post success!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deletePost: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient();
      const userdata: JwtPayload = req.user;
      const post = await prisma.post.findUnique({
        where: {
          id: Number.parseInt(req.params.id),
        },
      });
      if (!post) return res.status(400).json({ message: "post not exist" });
      if (post.userId!=Number.parseInt(userdata.sub)) return res.status(400).json({ message: "access denined !" });
      const postDelete = await prisma.post.deleteMany({
        where: {
          id: Number.parseInt(req.params.id),
        },
      });
      return res.status(200).json({ message: "delete post success!" });
      } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default postController;
