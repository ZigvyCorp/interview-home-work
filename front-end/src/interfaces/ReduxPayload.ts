import { PaginationRequest } from "./request/PaginationRequestDto";

export interface PostActionPayload extends PaginationRequest {
    keyword?: string;
}

export interface PostDetailPayload {
    id: number;
}