export interface PaginationResponse<T> {
    count: number;
    page: number;
    totalPage: number;
    rows: T[];
}
