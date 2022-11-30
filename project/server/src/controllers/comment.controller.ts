import { PrismaClient } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import { createCommemt } from "../dto/createComment.dto";
import { Request, Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

const commentController = {
  getAllComment: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient();
      const comments = await prisma.comments.findMany({});

      return res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
    createCommemt: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient();
      const commentDto: createCommemt = req.body;
      const post = await prisma.post.findUnique({
        where: {
          id: commentDto.postId,
        },
      });
      if (!post) return res.status(400).json({ message: "post not exist" });
      const userdata: JwtPayload = req.user;
      const comment = await prisma.comments
        .create({
          data: {
            ...commentDto,
            userId: Number.parseInt(userdata.sub),
            email: userdata.email,
            name: userdata.name,
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
      return res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  editCommemt: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient();
      const commentDto: createCommemt = req.body;
      const userdata: JwtPayload = req.user;
      const comment = await prisma.comments.findUnique({
        where: {
          id: Number.parseInt(req.params.id),
        },
      });
      if (!comment) return res.status(400).json({ message: "comment not exist" });
      if (comment.userId != Number.parseInt(userdata.sub))
        return res.status(400).json({ message: "access denined !" });
      const commentUpdate = await prisma.comments.updateMany({
        where: {
            id: Number.parseInt(req.params.id),
        },
        data: {
          body: commentDto.body,
        },
      });
      return res.status(200).json({ message: "edit comments success!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteComment: async (req: Request, res: Response) => {
    try {
      const prisma = new PrismaClient();
      const userdata: JwtPayload = req.user;
      const comment = await prisma.comments.findUnique({
        where: {
          id: Number.parseInt(req.params.id),
        },
      });
      if (!comment) return res.status(400).json({ message: "post comment exist" });
      if (comment.userId != Number.parseInt(userdata.sub))
        return res.status(400).json({ message: "access denined !" });
      const commentsDelete = await prisma.comments.deleteMany({
        where: {
          id: Number.parseInt(req.params.id),
        },
      });
      return res.status(200).json({ message: "delete comment success!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default commentController;
