import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreatPostDto } from "src/core/dto/post.dto";
import { IPost } from "src/core/interface/post.interface";
import { PostService } from "src/services/post/post.service";

@Controller("posts")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get("/")
  async getPosts(): Promise<IPost[]> {
    return this.postService.getPosts();
  }

  @Get("/:id")
  async getPostById(@Param("id") id: string): Promise<IPost> {
    return this.postService.getPostById(id);
  }

  @Post("/")
  async createPost(@Body() dto: CreatPostDto): Promise<IPost> {
    return this.postService.createPost(dto);
  }
}
