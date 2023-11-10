import { getBaseURLServer } from '../core/base';
import { BaseRepository } from '../core/repository';
import { NActionApp } from '../stores/redux/app.action';

export class CommentsRepository {
  async GetCommentsByPostId(params: NActionApp.ParamsGetCommentsByPostId) {
    try {
      const baseURL = getBaseURLServer();
      const repository = new BaseRepository({ baseURL });
      const response = repository.get({ url: '/v1/comments', params });
      return response;
    } catch (error: any) {
      throw error;
    }
  }
}
