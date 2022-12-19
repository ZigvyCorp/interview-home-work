import { baseService } from "./baseService";

class PostServices extends baseService {
  getPosts = () => this.get('posts')
}

export const postServices = new PostServices()
