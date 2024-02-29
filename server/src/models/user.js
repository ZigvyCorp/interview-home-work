import { conn, selectQueries } from '#root/utils/index.js';

class User {
  getUserById(userId) {
    return conn
      .query(selectQueries.user.getUserById, [userId])
      .catch((error) => {
        console.error(error);
      });
  }
}

export default User;
