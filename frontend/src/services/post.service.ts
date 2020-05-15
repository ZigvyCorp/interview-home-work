import { Post } from "@/models/post";
import { injectable } from "inversify";
import { axiosInstance } from "./axios";

@injectable()
export class PostService {
  private _axios = axiosInstance;

  createPost(data: Partial<Post>) {
    return this._axios.post("/posts", data);
  }
}
