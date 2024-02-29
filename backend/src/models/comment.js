import { conn, selectQueries } from '#root/utils/index.js';

class Comment {
  getComment() {
    return conn.query(selectQueries.comment.getComment).catch((error) => {
      console.error(error);
    });
  }
}

export default Comment;
