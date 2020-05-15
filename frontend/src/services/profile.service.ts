import { injectable } from "inversify";
import { axiosInstance } from "./axios";

@injectable()
export class ProfileService {
  private _axios = axiosInstance;
  fetchMyProfile() {
    return this._axios.get("/profiles/me");
  }
}
