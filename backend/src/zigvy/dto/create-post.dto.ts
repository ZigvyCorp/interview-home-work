import { IsArray, IsDefined, IsNumber } from "class-validator";

export class CreatePostDto {
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
