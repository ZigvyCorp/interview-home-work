const usersAPI = {
  usersFetch: () => {
    return fetch(`http://localhost:3001/users`).then((res) =>
      res.json()
    );
  },
};

export default usersAPI;
