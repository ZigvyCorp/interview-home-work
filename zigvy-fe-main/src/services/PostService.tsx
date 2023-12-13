import axios from "axios";

async function fetchPostFromRange({ page = 0 }: { page: number }) {
  try {
    const res = await axios.get("posts", {
      params: {
        _start: page,
        _limit: 5,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

async function fetchPost() {
  try {
    const res = await axios.get("posts");
    return res.data;
  } catch (error) {
    throw error;
  }
}

const PostService = {
  fetchPost,
  fetchPostFromRange,
};

export default PostService;
