import { IsDefined } from "class-validator";

export class CreateCommentRequestDto {
    @IsDefined()
    content: string;

    @IsDefined()
    postId: number;

    @IsDefined()
    ownerId: number;
}