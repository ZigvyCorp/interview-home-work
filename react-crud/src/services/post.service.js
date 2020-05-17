import http from "../http-common";

class PostService {
  getAllPost(search = "") {
    return http.post("/post/getAllPost", { search });
  }  
  
  saveNewPost(data) {
    return http.post("/post/createPost", data);
  }  
  
  deletePost(id) {
    return http.delete(`/post/deletePost/${id}`);
  }
  
  updatePost(id, data) {
    return http.put(`/post/updatePost/${id}`, data);
  }

}

export default new PostService();