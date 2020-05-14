import { LoginRequestModel } from "@/models/requests/login";
import { SignUpRequestModel } from "@/models/requests/sign-up";
import { AxiosInstance } from "axios";
import { injectable } from "inversify";
import { axiosInstance } from "./axios";

@injectable()
export class AuthService {
  private _axios: AxiosInstance = axiosInstance;
  signUp(data: SignUpRequestModel) {
    return this._axios.post("/auth/sign-up", data);
  }

  login(data: LoginRequestModel) {
    return this._axios.post("/auth/login", data);
  }

  fetchMyProfile() {
    return this._axios.get("/profiles/me");
  }
}
