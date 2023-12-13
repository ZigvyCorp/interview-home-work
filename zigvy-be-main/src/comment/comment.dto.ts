import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class CommentDto {
  @Expose()
  @IsOptional()
  postId?: number;

  @Expose()
  @IsOptional()
  id?: number;

  @Expose()
  @IsOptional()
  name?: string;

  @Expose()
  @IsOptional()
  email?: string;

  @Expose()
  @IsOptional()
  body?: string;
}
