import { IMongoDbServices } from 'src/core/abstract/data-services/data-mongodb-service.abstract';
import { CreatPostDto } from 'src/core/dto/post.dto';
import { IPost } from 'src/core/interface/post.interface';
export declare class PostService {
    private readonly db;
    constructor(db: IMongoDbServices);
    getPosts(): Promise<IPost[]>;
    getPostById(id: string): Promise<IPost>;
    createPost(dto: CreatPostDto): Promise<IPost>;
}
