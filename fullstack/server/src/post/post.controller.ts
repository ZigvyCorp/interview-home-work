import { Controller, Body, Query, Param, Get, Post, Put, Delete, Res } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto';
import { Response } from 'express';

@Controller('post')
export class PostController {
  constructor (private readonly postService: PostService) { }

  @Get()
  getAll(
    @Query("skip") skip: number,
    @Query("take") take: number,
    @Query("orderBy") order: string,
    @Res() res: Response
  ) {
    try {
      return res.status(200).json({
        data: this.postService.getAll(skip, take, order)
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Get()
  getPostByTitle(
    @Query("title") title: string,
    @Res() res: Response
  ) {
    try {
      return res.status(200).json({
        data: this.postService.getPostByTitle(title)
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Get(":id")
  getPostById(
    @Param("id") id: number,
    @Res() res: Response
  ) {
    try {
      return res.status(200).json({
        data: this.postService.getPostById(id)
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Get("user/:id")
  getPostByUser(
    @Param("id") id: number,
    @Res() res: Response
  ) {
    try {
      return res.status(200).json({
        data: this.postService.getPostByUser(id)
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Post("/create")
  createPost(
    @Body("data") dto: CreatePostDto,
    @Res() res: Response
  ) {
    try {
      const createPost = this.postService.createPost(dto);
      return res.status(200).json({
        msg: "Post has been created"
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }

  }

  @Put(":id")
  updatePost(
    @Param("id") id: number,
    @Body("data") dto: UpdatePostDto,
    @Res() res: Response
  ) {
    try {
      const updatePost = this.postService.updatePost(id, dto);
      return res.status(200).json({
        msg: "Post has been updated"
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Delete(":id")
  deletePost(
    @Param("id") id: number,
    @Res() res: Response
  ) {
    try {
      const deletePost = this.postService.deletePost(id);
      return res.status(200).json({
        msg: "Post has been deleted"
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }

  }

}
