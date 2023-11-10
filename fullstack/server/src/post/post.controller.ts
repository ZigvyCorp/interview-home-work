import { Controller, Body, Query, Param, Get, Post, Put, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto';
import { Response } from 'express';

@Controller('post')
export class PostController {
  constructor (private readonly postService: PostService) { }

  @Get()
  async getAll(
    @Query("skip", new ParseIntPipe()) skip: number,
    @Query("take", new ParseIntPipe()) take: number,
    @Query("orderBy") order: string,
    @Res() res: Response
  ) {
    try {
      const data = await this.postService.getAll(skip, take, order);
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
  async getPostByTitle(
    @Query("title") title: string,
    @Res() res: Response
  ) {
    try {
      const data = await this.postService.getPostByTitle(title);
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
  async getPostById(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response
  ) {
    try {
      const data = await this.postService.getPostById(id);
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
  async getPostByUser(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response
  ) {
    try {
      const data = await this.postService.getPostByUser(id);
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
  async createPost(
    @Body("data") dto: CreatePostDto,
    @Res() res: Response
  ) {
    try {
      const createPost = await this.postService.createPost(dto);
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
  async updatePost(
    @Param("id", new ParseIntPipe()) id: number,
    @Body("data") dto: UpdatePostDto,
    @Res() res: Response
  ) {
    try {
      const updatePost = await this.postService.updatePost(id, dto);
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
  async deletePost(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response
  ) {
    try {
      const deletePost = await this.postService.deletePost(id);
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
