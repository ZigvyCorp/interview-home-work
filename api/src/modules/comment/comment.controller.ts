import { Body, Controller, Delete, Get, Param, Put, Request, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { FetchByIdDto } from 'src/common/dto/common.dto';
import { IVerifyUser } from '../user/interface/user.interface';
import { IRequestAuth } from '../auth/interface/auth.interface';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { UpdateCommentDto } from './dto/comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete comment, just delete your comment' })
  @Delete(':id')
  deleteComment(@Param() params: FetchByIdDto, @Request() req: IRequestAuth<IVerifyUser>) {
    return this.commentService.deleteComment({
      id: params.id,
      userId: req.user.id,
    });
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get comment by id' })
  @Get(':id')
  getCommentById(@Param() params: FetchByIdDto) {
    return this.commentService.getCommentById(params.id);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update comment, just update your comment' })
  @Put(':id')
  updateComment(
    @Param() params: FetchByIdDto,
    @Body() payload: UpdateCommentDto,
    @Request() req: IRequestAuth<IVerifyUser>,
  ) {
    return this.commentService.updateComment({
      id: params.id,
      userId: req.user.id,
      content: payload.content,
    });
  }
}
