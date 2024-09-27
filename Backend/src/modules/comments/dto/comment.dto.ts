import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { CommentTypeEnum } from '~/common/enums';
import { PaginationOptionsDto } from '~/shared/dto';

export class CommentsReqDto extends PaginationOptionsDto {
  @ApiPropertyOptional()
  search?: string;
}

export class CreateCommentDto {
  @ApiProperty()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsNumber()
  postId: number;

  @ApiProperty()
  @IsString()
  body: string;

  @ApiPropertyOptional()
  @IsEnum(CommentTypeEnum)
  type: CommentTypeEnum;
}

export class UpdateCommentDto extends PartialType(CreateCommentDto) {}
