import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentToPostsDto {
  @ApiProperty({
    description: 'The content of the comment',
    example: 'This is my first comment',
  })
  @IsString()
  @IsNotEmpty()
  content: string;
}

export class UpdateCommentDto extends CreateCommentToPostsDto {}
