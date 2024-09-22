import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentForm } from './dtos/create-comment.form';
import { UpdateCommentForm } from './dtos/update-comment.form';

@Controller('comments')
export class CommentsController {
  constructor(private commentService: CommentsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createCommentForm: CreateCommentForm) {
    return this.commentService.create(createCommentForm);
  }

  @Get()
  findAll() {
    return this.commentService.getAll();
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.delete(id);
  }

  @Put()
  @UsePipes(new ValidationPipe())
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCommentForm: UpdateCommentForm,
  ) {
    return this.commentService.update(id, updateCommentForm);
  }
}
