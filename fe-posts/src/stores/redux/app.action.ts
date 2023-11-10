const prefix = 'APP_';

export namespace NActionApp {
  export const GET_POSTS = prefix + 'GET_POSTS';
  export const GET_POST_BY_ID = prefix + 'GET_POST_BY_ID';

  export const GET_COMMENTS_BY_POST_ID = prefix + 'GET_COMMENTS_BY_POST_ID';

  export type ParamsGetCommentsByPostId = { postId: string };

  export type ParamsPaging = {
    limit?: number;
    page?: number;
    title?: string;
  };
}

export class ActionApp {
  static RequestGetPosts = (payload?: NActionApp.ParamsPaging) => ({
    type: NActionApp.GET_POSTS,
    payload,
  });
  static RequestGetPostById = () => ({
    type: NActionApp.GET_POST_BY_ID,
  });
  static RequestGetCommentsByPostId = (
    payload: NActionApp.ParamsGetCommentsByPostId
  ) => ({
    type: NActionApp.GET_COMMENTS_BY_POST_ID,
    payload,
  });
}
