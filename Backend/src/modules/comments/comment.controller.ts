import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CommentService } from './comment.service';
import {
  CreateCommentDto,
  CommentsReqDto,
  UpdateCommentDto,
} from './dto/comment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('comments')
@ApiTags('comments')
@UsePipes(new ValidationPipe({ transform: true }))
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getComments(@Query() dto: CommentsReqDto) {
    return await this.commentService.getComments(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.commentService.findOne(id);
  }

  @Post()
  async createComment(@Body() dto: CreateCommentDto) {
    return await this.commentService.createComment(dto);
  }

  @Patch(':id')
  async updateComment(@Param('id') id: number, @Body() dto: UpdateCommentDto) {
    return await this.commentService.updateComment(id, dto);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: number) {
    return await this.commentService.deleteComment(id);
  }
}
