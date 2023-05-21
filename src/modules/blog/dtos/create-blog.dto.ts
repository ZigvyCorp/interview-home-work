import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateBlogDto {
    @ApiProperty({ type: String, description: 'Blog title' })
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({ type: String, description: 'Blog author' })
    @IsString()
    @IsNotEmpty()
    author: string

    @ApiProperty({ type: String, description: 'Blog content' })
    @IsString()
    @IsNotEmpty()
    content: string
}