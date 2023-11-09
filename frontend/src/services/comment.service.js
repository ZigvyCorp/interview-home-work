import { asyncHandle } from "../utils/asyncHandle";
import { API_BASE_URL } from "../config/apiConfig";

const getCommentsByPostId = async (id) => {
    const [response, err] = await asyncHandle(
        fetch(API_BASE_URL + "/comments?postId=" + id)
    );
    if (err) {
        console.log(err);
    }
    return await response.json();
};
export { getCommentsByPostId };
