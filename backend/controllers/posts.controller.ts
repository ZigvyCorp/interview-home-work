import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catch-async";
import { IPostDocument } from "../models/post.model";

export const getPosts = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { page = 1 } = req.query;

    const postRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    const posts = await postRes.json();

    const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await userRes.json();

    const data = (posts as IPostDocument[]).map((post) => {
      const user = users.find((user) => user.id === post.userId);
      return { ...post, user };
    });

    // const prices=
    res.status(200).json({
      status: "success",
      data,
    });
  }
);
