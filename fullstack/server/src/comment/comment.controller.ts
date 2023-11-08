import { Controller, Body, Param, Get, Post, Put, Delete, Res } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto';
import { Response } from 'express';

@Controller('comment')
export class CommentController {
  constructor (private readonly commentService: CommentService) { }

  @Get()
  getAll(@Res() res: Response) {
    try {
      return res.status(200).json({
        data: this.commentService.getAll()
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Get(":id")
  getCommentById(
    @Param("id") id: number,
    @Res() res: Response
  ) {
    try {
      return res.status(200).json({
        đata: this.commentService.getCommentById(id)
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Get("post/:id")
  getCommentByPost(
    @Param("id") id: number,
    @Res() res: Response
  ) {
    try {
      return res.status(200).json({
        data: this.commentService.getCommentByPost(id)
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }

  }

  @Post("create")
  createComment(
    @Body("data") dto: CreateCommentDto,
    @Res() res: Response
  ) {
    try {
      const createComment = this.commentService.createComment(dto);
      return res.status(200).json({
        msg: "Comment has been created."
      });
    } catch (e: any) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Put(":id")
  updateComment(
    @Param("id") id: number,
    @Body("data") dto: UpdateCommentDto,
    @Res() res: Response
  ) {
    try {
      const updateComment = this.commentService.updateComment(id, dto);
      return res.status(200).json({
        msg: "Comment has been updated"
      });
    } catch (e: any) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Delete(":id")
  deleteComment(
    @Param("id") id: number,
    @Res() res: Response
  ) {
    try {
      const deleteComment = this.commentService.deleteComment(id);
      return res.status(200).json({
        msg: "Comment has been deleted"
      });
    } catch (e: any) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }
}
