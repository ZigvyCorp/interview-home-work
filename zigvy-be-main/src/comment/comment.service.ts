import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { CommentDto } from './comment.dto';
import { env } from 'process';

@Injectable()
export class CommentService {
  constructor(private readonly httpService: HttpService) {}
  async getListCommentByPostId(
    postId: number,
  ): Promise<AxiosResponse<CommentDto[]>> {
    const result = await this.httpService.axiosRef.get(
      `${env.BASE_URL}comments?postId=${postId}`,
    );
    return result.data;
  }
}
