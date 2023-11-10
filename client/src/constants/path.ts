const PATH = {
  HOME: '/',
  CREATE_BLOG: '/create-blog',
  LOGIN: '/login',
  REGISTER: '/register',
  BLOG_DETAIL: '/blogs/:name_id',
  BLOG_DETAIL_WITHOUT_PARAM: '/blogs/',
  NOT_FOUND: '*'
} as const

export default PATH
