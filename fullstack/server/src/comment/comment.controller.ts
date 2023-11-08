import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto';

@Controller('comment')
export class CommentController {
  constructor (private readonly commentService: CommentService) { }

  @Get()
  getAll() { }

  @Get(":id")
  getCommentById(@Param("id") id: number) { }

  @Post("create")
  createComment(@Body("data") dto: CreateCommentDto) { }

  @Put(":id")
  updateComment(@Param("id") id: number, @Body("data") dto: UpdateCommentDto) { }

  @Delete(":id")
  deleteComment(@Param("id") id: number) { }
}
