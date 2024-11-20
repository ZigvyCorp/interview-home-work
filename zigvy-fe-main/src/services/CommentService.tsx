import axios from "axios";
import IComment from "../interface/IComment";

async function fetchCommentFromPost(postId: number): Promise<IComment[]> {
  try {
    const res = await axios.get("comments", {
      params: {
        postId,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

const CommentService = {
  fetchCommentFromPost,
};

export default CommentService;
