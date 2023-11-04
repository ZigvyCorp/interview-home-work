import { PaginationRequestDto } from './PaginationRequestDto';

export class GetCommentByPostIdRequestDto extends PaginationRequestDto {
    postId: number;
}