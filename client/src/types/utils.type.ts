export type SuccessResponse<Data> = {
  message: string
  data: Data
}

export type ErrorResponse<Data> = {
  message: string
  data?: Data
}

export type OnlyMessageResponse = {
  message: string
}

export type Pagination = {
  page: number
  limit: number
  total_rows: number
  total_pages: number
}

export type PaginationReqQuery = {
  page?: number
  limit?: number
}
