import { Controller, Body, Query, Param, Get, Post, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto';
import { Response } from 'express';

@Controller('post')
export class PostController {
  constructor (private readonly postService: PostService) { }

  @Get()
  getAll(
    @Query("skip", new ParseIntPipe()) skip: number,
    @Query("take", new ParseIntPipe()) take: number,
    @Query("orderBy") order: string,
    @Res() res: Response
  ) {
    try {
      const data = this.postService.getAll(skip, take, order);
      return res.status(200).json({
        data
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
      const data = this.postService.getPostByTitle(title);
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
  getPostById(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response
  ) {
    try {
      const data = this.postService.getPostById(id);
      return res.status(200).json({
        data
      });
    } catch (e) {
      return res.status(500).json({
        msg: e.message
      });
    }
  }

  @Get("user/:id")
  getPostByUser(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response
  ) {
    try {
      const data = this.postService.getPostByUser(id);
      return res.status(200).json({
        data
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
    @Param("id", new ParseIntPipe()) id: number,
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
    @Param("id", new ParseIntPipe()) id: number,
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
