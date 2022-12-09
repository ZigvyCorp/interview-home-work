import { baseServiceInterview } from "../baseServiceInterview";

export class UserService extends baseServiceInterview {
    // ! kế thừa ===> có toàn bộ phương thức từ baseService
    constructor(props) {
        super(props);
    }
    // getAllProject = () => {
    //     return this.get(`Project/getAllProject`)
    // }
    // deleteProject = (id) => {
    //     return this.delete(`Project/deleteProject?projectId=${id}`);
    // }
    // getProjectDetail = (projectId) => {
    //     return this.get(`Project/getProjectDetail?id=${projectId}`)
    // }
    getAllUser = ()=>{
        return this.get("users")
    }
}
export const userService = new UserService();