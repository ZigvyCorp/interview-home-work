import { CommentModel } from '#root/models/index.js';

export default async (req, res) => {
  const data = await CommentModel.getComment();
  res.send(data.rows);
};
