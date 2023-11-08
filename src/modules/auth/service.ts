import { API_ENDPOINTS } from "@/apis";
import { axiosClient } from "@/modules/shared";
import { ILoginParams } from "@/modules/auth/interface";

export const AUTH_SERVICE = {
  login: (data: ILoginParams) => {
    return axiosClient.post(API_ENDPOINTS.SIGNIN, {
      ...data,
    });
  },
};
