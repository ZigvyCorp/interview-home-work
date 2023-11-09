import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CreateCommentDto } from "src/core/dto/comment.dto";
import { IComment } from "src/core/interface/comment.interface";
import { CommentSevice } from "src/services/comment/comment.service";

@Controller("comments")
export class CommentController {
  constructor(private readonly commentService: CommentSevice) {}

  @Get("/")
  async getComments(): Promise<IComment[]> {
    return this.commentService.getComments();
  }
  @Get("/:id")
  async getCommentByPostId(@Param("id") post: string): Promise<IComment[]> {
    return this.commentService.getCommentByPostId(post);
  }
}
