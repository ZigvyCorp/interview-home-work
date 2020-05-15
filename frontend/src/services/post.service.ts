import { Post } from "@/models/post";
import { FilterRequest } from "@/models/requests/filter-request";
import { injectable } from "inversify";
import { axiosInstance } from "./axios";

@injectable()
export class PostService {
  private _axios: any = axiosInstance;

  createPost(data: Partial<Post>) {
    return this._axios.post("/posts", data);
  }

  getPosts(filter: FilterRequest = new FilterRequest()) {
    return this._axios.get("/posts", filter);
  }
}
