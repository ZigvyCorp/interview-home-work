const commentsAPI = {
  commentsFetch: () => {
    return fetch("http://localhost:3001/comments").then((res) => res.json());
  },
};

export default commentsAPI;
