import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBlogImagesDto {
    @ApiProperty()
    @IsOptional()
    readonly images: Express.Multer.File[];
}
