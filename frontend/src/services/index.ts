import { Container } from "inversify";
import React, { useContext } from "react";
import { AuthService } from "./auth.service";
import { ProfileService } from "./profile.service";

interface Services {
  authService: () => AuthService;
  profileService: () => ProfileService;
}

const ServiceTypes = {
  AuthService: Symbol("AuthService"),
  ProfileService: Symbol("ProfileService"),
};

const container = new Container();

container.bind(ServiceTypes.AuthService).to(AuthService);
container.bind(ServiceTypes.ProfileService).to(ProfileService);

const ServiceContext = React.createContext<Services>({
  authService: () => container.get<AuthService>(ServiceTypes.AuthService),
  profileService: () =>
    container.get<ProfileService>(ServiceTypes.ProfileService),
});

function useServices() {
  return useContext(ServiceContext);
}

export { container, useServices };
