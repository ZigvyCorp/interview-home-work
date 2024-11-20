import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateCommentDto {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    author: string

    @ApiProperty({ type: String, description: 'Blog comment content' })
    @IsString()
    @IsNotEmpty()
    content: string

    @ApiProperty({ type: String, description: 'Blog id' })
    @IsString()
    @IsNotEmpty()
    blog: string
}