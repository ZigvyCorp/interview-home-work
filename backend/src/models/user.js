import { conn, selectQueries } from '#root/utils/index.js';

class User {
  getUser() {
    return conn.query(selectQueries.user.getUser).catch((error) => {
      console.error(error);
    });
  }
}

export default User;
