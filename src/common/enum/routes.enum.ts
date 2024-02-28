export enum PAGE_SECTION {
  HOME = "",
  USER = "user",
  BLOG = "blog",
}

export const ROUTES_PATH = {
  HOME: `/${PAGE_SECTION.HOME}`,
  USER: `${PAGE_SECTION.USER}/:userId`,
  BLOG_DETAIL: `/${PAGE_SECTION.BLOG}/:blogId`,
};
