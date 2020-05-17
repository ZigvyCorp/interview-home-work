import http from "../http-common";

class CommentService {

  addNewComment(data) {
    return http.post("/comment/addNewComment", data);
  }

  updateComment(id, data) {
    return http.put(`/comment/updateComment/${id}`, data);
  }

  deleteComment(id) {
    return http.delete(`/comment/deleteComment/${id}`);
  }
  
}

export default new CommentService();