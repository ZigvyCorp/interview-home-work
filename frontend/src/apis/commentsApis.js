import axios from "axios";

// api get count comments by post id
const getCommentCountByPostId = async (data) => {
  const { bid } = data;
  const response = await axios.get(
    `${process.env.REACT_APP_URL_SERVER_API}/comments/count/${bid}`
  );

  return response.data;
};

// api get all comments by post id
const getAllCommentsByPostId = async (data) => {
  const { bid } = data;
  const response = await axios.get(
    `${process.env.REACT_APP_URL_SERVER_API}/comments/${bid}`
  );

  return response.data;
};

// api change password: data: {token, password,rePassword}
const apiChangePassword = async (data) => {
  const { token, password, rePassword } = data;
  const response = await axios.post(
    `${process.env.REACT_APP_URL_SERVER_API}/users/change-password?token=${token}`,
    { password, rePassword }
  );
  return response;
};

export { getCommentCountByPostId, getAllCommentsByPostId };
