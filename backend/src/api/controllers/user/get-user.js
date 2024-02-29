import { UserModel } from '#root/models/index.js';

export default async (req, res) => {
  const data = await UserModel.getUser();
  res.send(data.rows);
};
