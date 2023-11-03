import API from '../../../../configs/axios';

export const getDetailBlog = async (id: string) => {
  const data = await API.get({
    url: `/blog/${id}`,
  });
  return data;
};
