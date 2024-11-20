import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL || "";

export const getListPostData = async (valuePagination: number) => {
  const { data } = await axios.post(`${serverUrl}/api/posts`, valuePagination);
  return data;
};

export const getCommentsInPostData = async (_id: any) => {
  const { data } = await axios.post(`${serverUrl}/api/posts/comments`, _id);
  return data;
};

export const searchPostData = async (valueSearch: any) => {
  const { data } = await axios.post(
    `${serverUrl}/api/posts/search`,
    valueSearch
  );
  return data;
};
