import { PaginationRequestDto } from "./PaginationRequestDto";

export class GetPostRequestDto extends PaginationRequestDto {
    keyword?: string;
}