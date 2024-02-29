module.exports = { userView, usersView };

function userView(user) {
  return {
    ...user,
    id: user._id,
    _id: undefined,
    password: undefined,
    created_at: undefined,
  };
}

function usersView(users) {
  return users.map(user => userView(user));
}