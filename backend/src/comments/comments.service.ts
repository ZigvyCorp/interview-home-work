import { Injectable } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';
import { FindPostResponse } from 'src/posts/type/post.type';
import { FindUserResponse } from 'src/users/type/user.type';
import { UpdateResult } from 'typeorm';
import { FindCommentResponse } from './comment.type';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentRepository } from './repositories/comment.repository';

@Injectable()
export class CommentsService {
  constructor(
    private commentRepository: CommentRepository,
    private postService: PostsService
  ){}
  async create(createCommentDto: CreateCommentDto): Promise<boolean> {
    try {
      let postFound:FindPostResponse = await this.postService.findOne(+createCommentDto.post);

      if(postFound) {
        createCommentDto.post = postFound;
        let commentCreated = await this.commentRepository.create(createCommentDto);
        let saveComment = await this.commentRepository.save(commentCreated);
        console.log(saveComment);
        return saveComment ? true : false;
      }
    } catch (error) {
      console.log("createError: ",error)
      return false;
    }
  }

  async findAll(): Promise<FindCommentResponse[] | null> {
    try {
      let listComment:FindCommentResponse[] = await this.commentRepository.find({relations:['owner']});
      listComment.map(item => item.owner = item.owner.id)
      return listComment ? listComment : null
    } catch (error) {
      console.log("findAllErr: ",error);
      return null
    }
  }

  async findOne(id: number): Promise<FindCommentResponse | null> {
    try {
      let listComment:FindCommentResponse = await this.commentRepository.findOne(id, {
        relations:['owner'],
        where: {
          removed: false
        }
      });
      listComment.owner = listComment.owner.id;
      return listComment ? listComment : null
    } catch (error) {
      console.log("findOneErr: ",error);
      return null
    }
  }

  async update(id: number, updateCommentDto: UpdateCommentDto):Promise<UpdateResult | boolean> {
    try {
      let updateCommentResult:UpdateResult = await this.commentRepository.update(id,updateCommentDto);
      return updateCommentResult
    } catch (error) {
      console.log("update: ", error)
      return false
    }
  }

  async remove(id: number):Promise<UpdateResult | boolean> {
    try {
      let removeCommentResult:UpdateResult = await this.commentRepository.update(id, {
        removed:true
      })
      return removeCommentResult
    } catch (error) {
      console.log("remove: ",error);
      return false
    }
  }
}
