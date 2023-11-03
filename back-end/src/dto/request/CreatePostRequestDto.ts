import { IsArray, IsDefined, IsNumber } from "class-validator";

export class CreatePostRequestDto {
    @IsDefined()
    title: string;

    @IsDefined()
    content: string;

    @IsArray()
    @IsDefined()
    tags: string[];

    @IsNumber()
    @IsDefined()
    ownerId: number;
}