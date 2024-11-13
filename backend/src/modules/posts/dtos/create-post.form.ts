import { IsNotEmpty } from 'class-validator';

export class CreatePostForm {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  userId: number;
}
