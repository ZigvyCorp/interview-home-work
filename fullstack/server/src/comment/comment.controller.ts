import { Controller, Body, Param, Get, Post, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto';
import { Response } from 'express';

@Controller('comment')
export class CommentController {
  constructor (private readonly commentService: CommentService) { }

  @Get()
  async getAll(@Res() res: Response) {
    try {
      const data = await this.commentService.getAll();
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
  async getCommentById(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response
  ) {
    try {
      const data = await this.commentService.getCommentById(id);
      return res.status(200).json({
        data
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Get("post/:id")
  async getCommentByPost(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response
  ) {
    try {
      const data = await this.commentService.getCommentByPost(id);
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
  async createComment(
    @Body("data") dto: CreateCommentDto,
    @Res() res: Response
  ) {
    try {
      const createComment = await this.commentService.createComment(dto);
      return res.status(200).json({
        msg: "Comment has been created."
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Put(":id")
  async updateComment(
    @Param("id", new ParseIntPipe()) id: number,
    @Body("data") dto: UpdateCommentDto,
    @Res() res: Response
  ) {
    try {
      const updateComment = await this.commentService.updateComment(id, dto);
      return res.status(200).json({
        msg: "Comment has been updated"
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Delete(":id")
  async deleteComment(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response
  ) {
    try {
      const deleteComment = await this.commentService.deleteComment(id);
      return res.status(200).json({
        msg: "Comment has been deleted"
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }
}
