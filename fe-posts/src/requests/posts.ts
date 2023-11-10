import { getBaseURLServer } from '../core/base';
import { BaseRepository } from '../core/repository';
import { NActionApp } from '../stores/redux/app.action';

export class PostsRepository {
  async GetPosts(params?: NActionApp.ParamsPaging) {
    try {
      const baseURL = getBaseURLServer();
      const repository = new BaseRepository({ baseURL });
      const response = repository.get({ url: '/v1/posts', params });
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async GetPostById(id: string) {
    try {
      const baseURL = getBaseURLServer();
      const repository = new BaseRepository({ baseURL });
      const response = repository.get({ url: `/v1/posts/${id}` });
      return response;
    } catch (error: any) {
      throw error;
    }
  }
}
