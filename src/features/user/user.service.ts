import { IUser } from "@/common/@types/types";
import HttpService from "@/common/services/http.service";

class User extends HttpService {
  constructor() {
    super({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  }

  getUsers() {
    return this.get<IUser[]>("/users");
  }

  getUserById(id: string) {
    return this.get<IUser>(`/users/${id}`);
  }
}

const userApi = new User();

export default userApi;
