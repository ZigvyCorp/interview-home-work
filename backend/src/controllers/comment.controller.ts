import { Request, Response } from "express";
import { commentPost } from "src/services/comment.service";

export async function add(request: Request, response: Response) {
  try {
    const newComment = await commentPost(request.body);
    // *INFO: This console.log is to prove that the api is working
    console.log(newComment);

    return response.status(200).json(newComment);
  } catch (error) {
    return response.status(500).json({ message: (error as Error).message });
  }
}
