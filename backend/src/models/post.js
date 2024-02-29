import { conn, selectQueries } from '#root/utils/index.js';

class Post {
  getPost() {
    return conn.query(selectQueries.post.getPost).catch((error) => {
      console.error(error);
    });
  }
}

export default Post;
