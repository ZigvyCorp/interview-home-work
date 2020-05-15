import { injectable } from "inversify";
import { axiosInstance } from "./axios";

@injectable()
export class TagService {
  private _axios: any = axiosInstance;
  addTag(name: string) {
    return this._axios.post("/tags", { name });
  }

  getSuggestions(name: string) {
    return this._axios.get("/tags/suggestions", {
      key: name,
      page: 0,
      pageSize: 10,
    });
  }
}
