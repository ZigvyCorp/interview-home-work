import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  overview: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  comments: string[];
}
