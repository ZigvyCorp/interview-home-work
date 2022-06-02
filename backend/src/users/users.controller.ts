import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindUserResponse } from './type/user.type';
import { UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    let userCreatedResult:boolean = await this.usersService.create(createUserDto);
    if (!userCreatedResult) {
      throw new HttpException(
        {
          status: HttpStatus.FAILED_DEPENDENCY,
          errorMessage: {
            dev: "can't create all user data",
            user: "can't create all user data",
          },
        },
        HttpStatus.FAILED_DEPENDENCY,
      );
    }
    return userCreatedResult
  }

  @Get()
  async findAll() {
    let listUser: FindUserResponse[] | null = await this.usersService.findAll();
    if(!listUser) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errorMessage: {
            dev: `can't find all user data`,
            user: "not found",
          },
        },
        HttpStatus.NOT_FOUND,
      );
    }
    let listUserAfter:FindUserResponse[] = listUser.map(item => {
      let {password, ...result} = item;
      return result
    })
    return listUserAfter  
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    let user: FindUserResponse | null = await this.usersService.findOne(id);
    if(!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errorMessage: {
            dev: `can't find all user data`,
            user: "not found",
          },
        },
        HttpStatus.NOT_FOUND,
      );
    }
    let {password, ...result} = user;
    return result
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    let userUpdate:UpdateResult | boolean = await this.usersService.update(id, updateUserDto);
    if(!userUpdate) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          errorMessage: {
            dev: `can't save data to db`,
            user: "failed to update",
          },
        },
        HttpStatus.NOT_MODIFIED,
      );
    }
    return true;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    let userUpdate:UpdateResult | boolean = await this.usersService.remove(id);
    if(!userUpdate) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          errorMessage: {
            dev: `can't save data to db`,
            user: "failed to update",
          },
        },
        HttpStatus.NOT_MODIFIED,
      );
    }
    return true;
  }
}
