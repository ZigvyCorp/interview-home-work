import API from '../../../../configs/axios';

type RequestPayload = {
  textSearch?: string;
  paging?: {
    skip: number;
    limit: number;
  };
};

export const queryBlog = async (payload: RequestPayload) => {
  const data = await API.post({
    url: '/blog/list',
    body: payload,
  });
  return data;
};
