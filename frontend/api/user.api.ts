import api from "./api"

const userAPI = {
  getUsers:() => {
    let url = 'users'
    return api.get(url)
  },

  getUsersById: (id:string) =>{
    let url = `users/${id}`
    return api.get(url)
  }
}
export default userAPI