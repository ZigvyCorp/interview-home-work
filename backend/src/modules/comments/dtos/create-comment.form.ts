import { IsNotEmpty } from 'class-validator';

export class CreateCommentForm {
  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  postId: number;
}
