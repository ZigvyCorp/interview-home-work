import { Users } from "../Interface";
import Endpoint from "../Endpoint";
import { getService } from "../../BaseApi";

export const fetchUserService = async () => {
  try {
    const apiService = await getService();
    const result: Users.FetchUsersResponse = await apiService.get(
      Endpoint.fetchUsers
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
