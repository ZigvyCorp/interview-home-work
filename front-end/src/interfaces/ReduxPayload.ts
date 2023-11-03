import { PaginationRequest } from "./request/PaginationRequestDto";

export interface PostActionPayload extends PaginationRequest {
}

export interface PostDetailPayload {
    id: number;
}