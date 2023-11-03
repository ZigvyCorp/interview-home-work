import { RESOURCES } from "src/constant/resource.constant";
import { URL } from "src/constant/url.constant";
import fetchData from "src/util/service.util";

export const getPostComments = async (postId: number) => {
  try {
    const data = await fetchData(
      `${URL}/posts/${postId}/${RESOURCES.comments}`,
      "GET"
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
