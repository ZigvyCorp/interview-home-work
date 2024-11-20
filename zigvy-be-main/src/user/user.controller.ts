import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUserList() {
    return await this.userService.getUserList();
  }

  @Get(':userId')
  async getUserDetail(@Param('userId') userId: string) {
    return await this.userService.getUserDetail(userId);
  }
}
