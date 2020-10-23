import { Container } from "inversify";
import { AuthService as Auth } from "./auth.service";
import { CommentService as Comment } from "./comment.service";
import { PostService as Post } from "./post.service";
import { ProfileService as Profile } from "./profile.service";
import { TagService as Tag } from "./tag.service";

const ServiceTypes = {
  AuthService: Symbol("AuthService"),
  TagService: Symbol("TagService"),
  ProfileService: Symbol("ProfileService"),
  PostService: Symbol("PostService"),
  CommentService: Symbol("CommentService"),
};

const container = new Container();

container.bind(ServiceTypes.AuthService).to(Auth);
container.bind(ServiceTypes.TagService).to(Tag);
container.bind(ServiceTypes.ProfileService).to(Profile);
container.bind(ServiceTypes.PostService).to(Post);
container.bind(ServiceTypes.CommentService).to(Comment);

export const AuthService = () => container.get<Auth>(ServiceTypes.AuthService);
export const TagService = () => container.get<Tag>(ServiceTypes.TagService);
export const ProfileService = () =>
  container.get<Profile>(ServiceTypes.ProfileService);
export const PostService = () => container.get<Post>(ServiceTypes.PostService);
export const CommentService = () =>
  container.get<Comment>(ServiceTypes.CommentService);
