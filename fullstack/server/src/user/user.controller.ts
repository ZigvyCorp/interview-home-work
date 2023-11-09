import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor (private readonly userService: UserService) { }

  @Get()
  getAll(@Res() res: Response) {
    try {
      const data = this.userService.getAll();
      return res.status(200).json({
        data
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Get(":id")
  getUserById(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response
  ) {
    try {
      const data = this.userService.getUserById(id);
      return res.status(200).json({
        data
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Post("create")
  createUser(
    @Body("data") dto: CreateUserDto,
    @Res() res: Response
  ) {
    try {
      const createUser = this.userService.createUser(dto);
      return res.status(200).json({
        msg: "User has been created."
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Put(":id")
  updateUser(
    @Param("id", new ParseIntPipe()) id: number,
    @Body("data") dto: UpdateUserDto,
    @Res() res: Response
  ) {
    try {
      const updateUser = this.userService.updateUser(id, dto);
      return res.status(200).json({
        msg: "User has been updated."
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Delete(":id")
  deleteUser(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response
  ) {
    try {
      const deleteUser = this.userService.deleteUser(id);
      return res.status(200).json({
        msg: "User has been deleted"
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }
}
