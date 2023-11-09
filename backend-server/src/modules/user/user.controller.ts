import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  Query,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from '@dto';
import { LIMIT_USER_PER_REQUEST } from '@common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(@Query('page') page: string = '1') {
    const limit = LIMIT_USER_PER_REQUEST;
    const offset = (Number(page) - 1) * limit;
    const fields = 'firstName lastName username';
    return this.userService.findAll({}, { fields, offset, limit });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne({ id: id });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const { deletedCount } = await this.userService.remove(id);
    if (deletedCount === 0)
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    return;
  }
}
