import { baseService } from "./baseService";

class UserServices extends baseService {
  getUsers = () => this.get('users')
}

export const userServices = new UserServices()