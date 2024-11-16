import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { QueryParamsDto } from 'src/common/dto/common.dto';

export class CreatePostsDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'My first post',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'The content of the post',
    example: 'This is my first post content',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: 'The tags of the post',
    example: ['tag1', 'tag2'],
  })
  @IsString({ each: true })
  tags: string[];
}

export class UpdatePostDto extends CreatePostsDto {}

export class GetAllPostsDto extends QueryParamsDto {
  @ApiPropertyOptional({
    type: String,
    description: 'Search query',
  })
  search: string;
}
