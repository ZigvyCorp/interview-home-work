import { AxiosResponse } from 'axios';
import configService from './configService';
import { IUser } from '@/types/user';

const userService = {
  async getUser(userId: string): Promise<IUser> {
    const url = `/users/${userId}`;
    return await configService.get(url);
  },
  getAll(params: any) {
    return configService.get('/users/', params);
  },
  createUser(data: any) {
    return configService.post('/users', data);
  },
  updateUser(userId: string, data: any) {
    return configService.put(`/users/${userId}`, data);
  },
  deleteUser(userId: string) {
    const url = `/users/${userId}`;
    return configService.delete(url);
  },
};

export default userService;
