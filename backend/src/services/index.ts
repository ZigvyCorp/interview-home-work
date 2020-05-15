import { Container } from "inversify";
import { AuthService as Auth } from "./auth.service";
import { ProfileService as Profile } from "./profile.service";
import { TagService as Tag } from "./tag.service";

const ServiceTypes = {
  AuthService: Symbol("AuthService"),
  TagService: Symbol("TagService"),
  ProfileService: Symbol("ProfileService"),
};

const container = new Container();

container.bind(ServiceTypes.AuthService).to(Auth);
container.bind(ServiceTypes.TagService).to(Tag);
container.bind(ServiceTypes.ProfileService).to(Profile);

export const AuthService = () => container.get<Auth>(ServiceTypes.AuthService);
export const TagService = () => container.get<Tag>(ServiceTypes.TagService);
export const ProfileService = () =>
  container.get<Profile>(ServiceTypes.ProfileService);
