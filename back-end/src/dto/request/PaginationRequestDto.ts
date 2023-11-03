type SortType = 'ASC' | 'DESC';
export class PaginationRequestDto {
    page: number;
    pageSize: number;
    order?: Record<string, SortType>;
}
