import { CreatPostDto } from "src/core/dto/post.dto";
import { IPost } from "src/core/interface/post.interface";
import { PostService } from "src/services/post/post.service";
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getPosts(): Promise<IPost[]>;
    getPostById(id: string): Promise<IPost>;
    createPost(dto: CreatPostDto): Promise<IPost>;
}
