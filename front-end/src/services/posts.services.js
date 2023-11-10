const postsAPI = {
  postsFetch: ({ page, limit, search }) => {
    return fetch(
      `http://localhost:3001/posts?page=${page}&limit=${limit}&search=${search}`
    ).then((res) => res.json());
  },

  postDetailFetch: (id) => {
    return fetch(`http://localhost:3001/posts/${id}`).then((res) => res.json());
  },
};

export default postsAPI;
