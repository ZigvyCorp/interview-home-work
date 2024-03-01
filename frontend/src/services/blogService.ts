import { IBlog } from '@/types/blog';
import configService from './configService';

const blogService = {
  getBlog(blogId: string): Promise<IBlog> {
    const url = `/blogs/${blogId}`;
    return configService.get(url);
  },
  getAll(params: any) {
    console.log(params);
    return configService.get('/blogs/', { params });
  },
  createBlog(data: any) {
    return configService.post('/blogs', data);
  },
  updateBlog(blogId: string, data: any) {
    return configService.put(`/blogs/${blogId}`, data);
  },
  deleteBlog(blogId: string, userId: string) {
    const url = `/blogs/${userId}/${blogId}`;
    return configService.delete(url);
  },
};

export default blogService;
