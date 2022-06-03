import { Injectable } from '@nestjs/common';
import { FindUserResponse } from 'src/users/type/user.type';
import { UsersService } from 'src/users/users.service';
import { UpdateResult } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './repositories/posts.repository';
import { FindPostResponse } from './type/post.type';

@Injectable()
export class PostsService {
  constructor(
    private postRepository: PostRepository,
    private userService: UsersService,
  ){}
  async create(createPostDto: CreatePostDto): Promise<boolean> {
    try {
      let userFound:FindUserResponse = await this.userService.findOne(+createPostDto.owner);
      if(userFound) {
        createPostDto.owner = userFound;
        let postCreated = await this.postRepository.create(createPostDto);
        let savePost = await this.postRepository.save(postCreated);
        console.log(savePost);
        return savePost ? true : false;
      }
    } catch (error) {
      console.log("createError: ",error)
      return false;
    }
  }

  async findAll(): Promise<FindPostResponse[] | null> {
    try {
      let listPost:FindPostResponse[] = await this.postRepository.find({relations:['owner']});
      listPost.map(item => item.owner = item.owner.id)
      return listPost ? listPost : null
    } catch (error) {
      console.log("findAllErr: ",error);
      return null
    }
  }

  async findOne(id: number): Promise<FindPostResponse | null> {
    try {
      let listPost:FindPostResponse = await this.postRepository.findOne(id, {
        relations:['owner'],
        where: {
          removed: false
        }
      });
      listPost.owner = listPost.owner.id;
      return listPost ? listPost : null
    } catch (error) {
      console.log("findOneErr: ",error);
      return null
    }
  }

  async update(id: number, updatePostDto: UpdatePostDto):Promise<UpdateResult | boolean> {
    try {
      let updatePostResult:UpdateResult = await this.postRepository.update(id,updatePostDto);
      return updatePostResult
    } catch (error) {
      console.log("update: ", error)
      return false
    }
  }

  async remove(id: number):Promise<UpdateResult | boolean> {
    try {
      let removePostResult:UpdateResult = await this.postRepository.update(id, {
        removed:true
      })
      return removePostResult
    } catch (error) {
      console.log("remove: ",error);
      return false
    }
  }
}
