import { Container } from "inversify";
import React, { useContext } from "react";
import { AuthService } from "./auth.service";
import { PostService } from "./post.service";
import { ProfileService } from "./profile.service";
import { TagService } from "./tag.service";

interface Services {
  authService: () => AuthService;
  profileService: () => ProfileService;
  tagService: () => TagService;
  postService: () => PostService;
}

export const ServiceTypes = {
  AuthService: Symbol("AuthService"),
  ProfileService: Symbol("ProfileService"),
  TagService: Symbol("TagService"),
  PostService: Symbol("PostService"),
};

const container = new Container();

container.bind(ServiceTypes.AuthService).to(AuthService);
container.bind(ServiceTypes.ProfileService).to(ProfileService);
container.bind(ServiceTypes.TagService).to(TagService);
container.bind(ServiceTypes.PostService).to(PostService);

const ServiceContext = React.createContext<Services>({
  authService: () => container.get<AuthService>(ServiceTypes.AuthService),
  profileService: () =>
    container.get<ProfileService>(ServiceTypes.ProfileService),
  tagService: () => container.get<TagService>(ServiceTypes.TagService),
  postService: () => container.get<PostService>(ServiceTypes.PostService),
});

function useServices() {
  return useContext(ServiceContext);
}

export { container, useServices };
