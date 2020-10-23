import { LoginRequestModel } from "@/models/requests/login";
import { SignUpRequestModel } from "@/models/requests/sign-up";
import { injectable } from "inversify";
import { axiosInstance } from "./axios";

@injectable()
export class AuthService {
  private _axios = axiosInstance;
  signUp(data: SignUpRequestModel) {
    return this._axios.post("/auth/sign-up", data);
  }

  login(data: LoginRequestModel) {
    return this._axios.post("/auth/login", data);
  }

  logout() {
    return this._axios.post("/auth/logout");
  }
}
