import { Comments } from "../Interface";
import Endpoint from "../Endpoint";
import { getService } from "../../BaseApi";

export const fetchCommentsService = async () => {
  try {
    const apiService = await getService();
    const result: Comments.FetchCommentsResponse = await apiService.get(
      Endpoint.fetchComments
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchCommentsDetailService = async (idPost: string) => {
  try {
    const apiService = await getService();
    const result: Comments.Comment = await apiService.get(
      `post/${idPost}/comments`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
