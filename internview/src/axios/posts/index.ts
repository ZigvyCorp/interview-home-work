import axios from "axios";
import instance from "../axios";

const url = "fb326d19-d90a-4a4e-9e67-88bfd3d07d42";
const postApi = {
  getPosts: () => instance.get(`${url}`),
  getCommentByPostId: (id: any) => axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
};

export default postApi;