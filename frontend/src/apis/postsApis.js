import axios from "axios";

// api get all posts
const apiGetAllPosts = async (data) => {
  const { page, pageSize } = data;
  const response = await axios.get(
    `${process.env.REACT_APP_URL_SERVER_API}/posts?page=${page}&pageSize=${pageSize}`
  );

  return response.data;
};

const getPostDetail = async (data) => {
  const { bid } = data;
  const response = await axios.get(
    `${process.env.REACT_APP_URL_SERVER_API}/posts/${bid}`
  );
  return response.data;
};

const getPostTitle = async (data) => {
  const { title } = data;
  const response = await axios.get(
    `${process.env.REACT_APP_URL_SERVER_API}/posts/search?title=${title}`
  );
  return response.data;
};

// api change password: data: {token, password,rePassword}
// const getPostDetail = async (data) => {
//   const { bid} = data;
//   const response = await axios.post(
//     `${process.env.REACT_APP_URL_SERVER_API}/posts/${bid}`,

//   );
//   return response;
// };

export { apiGetAllPosts, getPostDetail, getPostTitle };
