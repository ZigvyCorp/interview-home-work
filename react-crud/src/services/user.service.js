import http from "../http-common";

class UserService {

  createNewUser(data) {
    return http.post("/user/create", data);
  }

  login(data) {
    return http.post("/user/login", data);
  }

  loadUserDetail(id) {
    return http.get(`/user/detail/${id}`);
  }

  updateUserProfile(id, data) {
    return http.put(`/user/update/${id}`, data);
  }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new UserService();