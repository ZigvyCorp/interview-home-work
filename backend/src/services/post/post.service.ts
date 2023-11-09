import { Injectable } from '@nestjs/common';
import { IMongoDbServices } from 'src/core/abstract/data-services/data-mongodb-service.abstract';
import { CreatPostDto } from 'src/core/dto/post.dto';
import { IPost } from 'src/core/interface/post.interface';

@Injectable()
export class PostService {
  constructor(private readonly db: IMongoDbServices) {}

  async getPosts(): Promise<IPost[]> {
    return this.db.postRepo.findAll();
  }

  async getPostById(id: string): Promise<IPost>{
    return this.db.postRepo.findById(id)
  }

  async createPost(dto: CreatPostDto): Promise<IPost> {
    return this.db.postRepo.create(dto);
  }
}
