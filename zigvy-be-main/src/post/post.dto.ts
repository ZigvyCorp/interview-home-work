import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class PostDto {
  @Expose()
  @IsOptional()
  postId?: number;

  @Expose()
  @IsOptional()
  id?: number;

  @Expose()
  @IsOptional()
  userId?: number;

  @Expose()
  @IsOptional()
  body?: string;

  @Expose()
  @IsOptional()
  title?: string;
}
