import { baseServiceInterview } from "../baseServiceInterview";

export class PostService extends baseServiceInterview {
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
    getAllPost = ()=>{
        return this.get("posts")
    }
    getDetailPost = (postId)=>{
        return this.get(`posts/${postId}`)
    }
    getCommentPost = (postId)=>{
        return this.get(`posts/${postId}/comments`)
    }
}
export const postService = new PostService();