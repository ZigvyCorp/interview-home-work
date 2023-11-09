import { Controller, Get, Post, Body, Param, Query, BadGatewayException, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { UserService } from '../services';
import { PaginateQueryDto } from 'src/common/dtos/paginate.dto';
import { CreateUserDto } from '../dto/user/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() body: CreateUserDto) {
    const user = await this.userService.findByUsername(body.username.toLowerCase());
    if(user) {
      throw new BadGatewayException("User existed");
    }
    return this.userService.create({
      ...body,
    });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll(@Query() query: PaginateQueryDto) {
    return this.userService.findAll(query);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
