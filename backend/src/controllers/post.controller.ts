import { Request, Response } from "express";
import { IPaginationList } from "src/interfaces/common";
import { IPost, IPostWithRelations } from "src/interfaces/post";
import {
  createPost,
  getPostDetail,
  paginatePost,
} from "src/services/post.service";

export async function paginate(request: Request, response: Response) {
  try {
    const { titleSearch, start, limit } = request.query;

    const result: IPaginationList<IPostWithRelations> = await paginatePost(
      String(titleSearch || ""),
      Number(start),
      Number(limit)
    );

    return response.status(200).json(result);
  } catch (error) {
    return response.status(500).json({ message: (error as Error).message });
  }
}

export async function detail(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const result: IPostWithRelations | null = await getPostDetail(Number(id));

    return response.status(200).json(result);
  } catch (error) {
    return response.status(500).json({ message: (error as Error).message });
  }
}

export async function create(request: Request, response: Response) {
  try {
    const newPost: IPost = await createPost(request.body);
    // *INFO: This console.log is to prove that the api is working
    console.log(newPost);

    return response.status(200).json(newPost);
  } catch (error) {
    return response.status(500).json({ message: (error as Error).message });
  }
}
