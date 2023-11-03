import { IPostsState } from "./modules/posts/posts.constant";
import { IUserState } from "./modules/users/users.constant";

export interface IState {
  posts: IPostsState;
  users: IUserState;
}
