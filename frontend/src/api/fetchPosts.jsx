const fetchPosts = () => {
  return new Promise((resole) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        const userIds = posts.map((post) => post.userId);
        const postIds = posts.map((post) => post.id);
        fetchUsersByIds(userIds)
          .then((users) => {
            const data = { users: users, posts: posts };
            // resole(data);
            return data;
          })
          .then((data) => {
            fetchCommentsByIds(postIds).then((comments) => {
              resole({ ...data, comments: comments });
            });
          });
      });
    // .then((data) => {
    //   console.log(data);
    //   // const postIds = data?.posts.map((post) => post.id);
    //   // fetchCommentsByIds(postIds).then((comments) => {
    //   //   const result = { ...data, comments: comments };
    //   // });
    // });
  });
};

const fetchUsersByIds = (userIds) => {
  return new Promise((resole) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.json();
        return users;
      })
      .then((users) => {
        resole(users?.filter((user) => userIds.includes(user.id)));
      })
      .catch((err) => err);
  });
};

const fetchCommentsByIds = (postsID) => {
  return new Promise((resole) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        const comments = response.json();
        return comments;
      })
      .then((comments) => {
        resole(comments?.filter((comment) => postsID.includes(comment.postId)));
      })
      .catch((err) => err);
  });
};

export default fetchPosts;
