import fs from "fs";
import path from "path";

import { NextFunction, Request, Response } from "express";

import catchAsync from "../utils/catch-async";
import { IPostDocument } from "../models/post.model";
import { IUserDocument } from "../models/user.model";

let postData: IPostDocument[];
let userData: IUserDocument[];

const postFilePath = path.join(__dirname, "../data/posts.json");
const userFilePath = path.join(__dirname, "../data/users.json");

const jsonPostData = fs.readFileSync(postFilePath, "utf-8");
const jsonUserData = fs.readFileSync(userFilePath, "utf-8");

// adjust the structure to look like from apo
postData = JSON.parse(jsonPostData).map(
  (data: IPostDocument & { owner: number; content: string }) => {
    const { owner, content, ...rest } = data;
    return { ...rest, userId: owner, body: content };
  }
);
userData = JSON.parse(jsonUserData);

const initialPosts = postData.map((post) => {
  const user = userData.find((user) => user.id === post.userId);
  return { ...post, user };
});

const NUMBER_OF_POST = 100;
const LIMIT_POST = 10;
export const getPosts = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { page = 1 } = req.query;

    const postRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT_POST}`
    );
    const posts = await postRes.json();

    const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await userRes.json();

    const data = (posts as IPostDocument[]).map((post) => {
      const user = (users as IUserDocument[]).find(
        (user) => user.id === post.userId
      );
      return { ...post, user };
    });

    const nextPageValue =
      +page * LIMIT_POST < NUMBER_OF_POST ? +page + 1 : null;

    const currentPage = +page;

    const postCount = NUMBER_OF_POST;

    res.status(200).json({
      status: "success",
      result: { data: [...initialPosts, ...data] },
      nextPage: nextPageValue,
      currentPage,
      postCount,
    });
  }
);
