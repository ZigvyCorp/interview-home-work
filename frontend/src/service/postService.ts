import axiosClient from "./axiosClient";

import {
  PREFIX, POST, COMMENT
} from "./endpoint";


export const postService = {
  getPostData: (params:any) => {
    return axiosClient.get(`${PREFIX}${POST}`, {params});
  },
  getCommentByPostId: (params:any) => {
    return axiosClient.get(`${PREFIX}${COMMENT}`, {params});
  }
};