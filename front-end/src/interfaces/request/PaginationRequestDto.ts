type SortType = 'ASC' | 'DESC';

export interface PaginationRequest {
    page: number;
    pageSize: number;
    order?: Record<string, SortType>;
}
