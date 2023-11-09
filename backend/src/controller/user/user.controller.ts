import { Controller, Get, Param } from '@nestjs/common';
import { IUser } from 'src/core/interface/user.interface';
import { UserSevice } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserSevice) {}

  @Get('/')
  async getUsers(): Promise<IUser[]> {
    return this.userService.getUsers();
  }

  // @Get('/:id')
  // async getUserById(@Param('id') id: string): Promise<IUser> {
  //   return this.userService.getUsersById(id);
  // }
}
