const fetchPosts = () => {
  return new Promise((resole) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        const userIds = posts.map((post) => post.userId);
        fetchUsersByIds(userIds).then((users) => {
          const data = { users: users, posts: posts };
          resole(data);
        });
      });
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

export default fetchPosts;
