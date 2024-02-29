import { PostModel } from '#root/models/index.js';

export default async (req, res) => {
  const data = await PostModel.getPost();
  res.send(data.rows);
};
