import { IComment } from '@/types/comment';
import configService from './configService';

const commentService = {
  getComment(commentId: string) {
    const url = `/comments/${commentId}`;
    return configService.get(url);
  },
  async getCommentByBlog(blogId: string): Promise<IComment[]> {
    const url = `/comments/blog/${blogId}`;
    return await configService.get(url);
  },
  getAll(params: any) {
    return configService.get('/comments/', params);
  },
  async createComment(data: any): Promise<IComment> {
    return await configService.post('/comments', data);
  },
  updateComment(commentId: string, data: any) {
    return configService.put(`/comments/${commentId}`, data);
  },
  deleteComment(commentId: string, userId: string) {
    const url = `/comments/${userId}/${commentId}`;
    return configService.delete(url);
  },
};

export default commentService;
