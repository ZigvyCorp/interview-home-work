import { Container } from "inversify";
import React, { useContext } from "react";
import { AuthService } from "./auth.service";

interface Services {
  authService: () => AuthService;
}

const ServiceTypes = {
  AuthService: Symbol("AuthService"),
};

const container = new Container();

container.bind(ServiceTypes.AuthService).to(AuthService);

const ServiceContext = React.createContext<Services>({
  authService: () => container.get<AuthService>(ServiceTypes.AuthService),
});

function useServices() {
  return useContext(ServiceContext);
}

export { container, useServices };
