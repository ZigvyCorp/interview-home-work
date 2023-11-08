import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor (private readonly userService: UserService) { }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(":id")
  getUserById(@Param("id") id: number) {
    return this.userService.getUserById(id);
  }

  @Post("create")
  createUser(@Body("data") dto: CreateUserDto) {
    this.userService.createUser(dto);
    return "User has been created.";
  }

  @Put(":id")
  updateUser(@Param("id") id: number, @Body("data") dto: UpdateUserDto) {
    this.userService.updateUser(id, dto);
    return "User has been updated."
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number) {
    this.userService.deleteUser(id);
    return "User has been deleted";
  }
}
