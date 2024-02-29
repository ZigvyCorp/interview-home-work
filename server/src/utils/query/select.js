export default {
  post: {
    getPost: 'SELECT * FROM public."Post";'
  },
  comment: {
    getComment: 'SELECT * FROM public."Comment";'
  },
  user: {
    getUserById: 'SELECT * FROM public."User" WHERE "id" = $1;'
  }
};
