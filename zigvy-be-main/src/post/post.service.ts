import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PostDto } from './post.dto';
import { AxiosResponse } from 'axios';
import { env } from 'process';

@Injectable()
export class PostService {
  constructor(private readonly httpService: HttpService) {}

  async getListPostInPage(
    page: string,
    limit: string,
    title: string,
  ): Promise<AxiosResponse<PostDto[]>> {
    const result = await this.httpService.axiosRef.get(
      `${env.BASE_URL}posts?_start=${page}&_limit=${limit}&title_like=${title}`,
    );
    return result.data;
  }

  async getListPost(title: string): Promise<AxiosResponse<PostDto[]>> {
    const result = await this.httpService.axiosRef.get(
      `${env.BASE_URL}posts?title_like=${title}`,
    );
    return result.data;
  }

  async getDetailPost(postId: string) {
    const result = await this.httpService.axiosRef.get(
      `${env.BASE_URL}posts/${postId}`,
    );
    return result.data;
  }
}
