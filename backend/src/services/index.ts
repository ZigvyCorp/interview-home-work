import { Container } from "inversify";
import { AuthService } from "./auth.service";

const ServiceTypes = {
  AuthService: Symbol("AuthService"),
};

const container = new Container();

container.bind(ServiceTypes.AuthService).to(AuthService);

const Auth = () => container.get<AuthService>(ServiceTypes.AuthService);

export { Auth };
