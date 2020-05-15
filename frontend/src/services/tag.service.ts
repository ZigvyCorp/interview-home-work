import { AxiosInstance } from "axios";
import { injectable } from "inversify";
import { axiosInstance } from "./axios";

@injectable()
export class TagService {
  private _axios: AxiosInstance = axiosInstance;
  addTag(name: string) {
    return this._axios.post("/tags", name);
  }
}
