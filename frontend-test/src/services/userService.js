import { https } from "./config";

export const userServ = {
  getAllUser: () => {
    return https.get("/user/getAllUser");
  },
  getAllPost: () => {
    return https.get("/post/getAllPost");
  },
  getAllComment: () => {
    return https.get("/comment/getAllComment");
  },
};
