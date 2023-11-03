const prefix = 'BLOG/';

export namespace NActionBlog {
  export const LIST = prefix + 'LIST';
  export const DETAIL = prefix + 'DETAIL';

  export type InputListPayload = {
    body: {
      textSearch?: string;
      paging: {
        skip: number;
        limit: number;
      };
    };
  };

  export type InputDetailPayload = {
    id: string;
  };
}

export class ActionBlog {
  static RequestList = (input: NActionBlog.InputListPayload) => ({
    type: NActionBlog.LIST,
    payload: input,
  });
  static RequestDetail = (input: NActionBlog.InputDetailPayload) => ({
    type: NActionBlog.DETAIL,
    payload: input,
  });
}
