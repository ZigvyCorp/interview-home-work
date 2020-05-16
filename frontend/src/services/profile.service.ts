import { FilterRequest } from "@/models/requests/filter-request";
import { User } from "@/models/user";
import { injectable } from "inversify";
import { axiosInstance } from "./axios";

@injectable()
export class ProfileService {
  private _axios: any = axiosInstance;

  updateAvatar(file: File) {
    const formData = new FormData();
    formData.append("avatar", file);
    return this._axios.patch("/profiles/avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getUserPosts(userId: string, filter: FilterRequest = new FilterRequest()) {
    return this._axios.get(`/profiles/${userId}/posts`, filter);
  }

  updateProfile(data: User) {
    return this._axios.patch(`/profiles/${data._id}`, data);
  }

  getProfile(id: string) {
    return this._axios.get(`/profiles/${id}`);
  }

  fetchMyProfile() {
    return this._axios.get("/profiles/me");
  }
}
