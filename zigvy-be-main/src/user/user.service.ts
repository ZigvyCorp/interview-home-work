import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { UserDto } from './user.dto';
import { HttpService } from '@nestjs/axios';
import { env } from 'process';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  async getUserList(): Promise<AxiosResponse<UserDto[]>> {
    const result = await this.httpService.axiosRef.get(`${env.BASE_URL}users`);
    return result.data;
  }

  async getUserDetail(userId: string) {
    const result = await this.httpService.axiosRef.get(
      `${env.BASE_URL}users/${userId}`,
    );
    return result.data;
  }
}
