interface PAGINATION {
  MAX_ITEM_PER_PAGE: number
}

export const PAGINATION: PAGINATION = {
  MAX_ITEM_PER_PAGE: 10,
}

export const DEFAULT_ACCOUNT = {
  id: 0,
  name: '',
  email: '',
  phone: null,
  username: '',
}

export const BRIEF_CONTENT_LENGTH: number = 100