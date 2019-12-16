export enum PAGE_SECTION {
  HOME = "",
  USER = "user",
  POST = "post",
}

export const ROUTES_PATH = {
  HOME: `/${PAGE_SECTION.HOME}`,
  USER: `${PAGE_SECTION.USER}/:userId`,
  POST_DETAIL: `/${PAGE_SECTION.POST}/:postId`,
  PAGE_NOT_FOUND: "/page-not-found",
};
