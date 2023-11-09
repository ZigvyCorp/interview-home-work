import { IsArray, IsDefined, IsNumber } from "class-validator";

export class CreateCommentDto {
    @IsDefined()
    content: string;

    @IsNumber()
    @IsDefined()
    postId: number;

    @IsNumber()
    @IsDefined()
    userId: number;
}
