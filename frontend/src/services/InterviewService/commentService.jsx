import { baseServiceInterview } from "../baseServiceInterview";

export class CommentService extends baseServiceInterview {
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
    getAllComment = ()=>{
        return this.get("comments")
    }
    getOneComment = (commentID)=>{
        return this.get(`comments/${commentID}`)
    }
}
export const commentService = new CommentService();