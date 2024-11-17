import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'create a new user ' })
  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }
}
