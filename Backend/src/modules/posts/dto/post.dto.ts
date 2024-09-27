import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { PaginationOptionsDto } from '~/shared/dto';

export class PostsReqDto extends PaginationOptionsDto {
  @ApiPropertyOptional()
  search?: string;
}

export class CreatePostDto {
  @ApiProperty()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsString()
  body: string;
}

export class UpdatePostDto extends PartialType(CreatePostDto) {}
