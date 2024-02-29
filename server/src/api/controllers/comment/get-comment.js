import { CommentModel, UserModel } from '#root/models/index.js';

export default async (req, res) => {
  const data = await CommentModel.getComment();
  var cmts = data.rows;
  for (let i = 0; i < cmts.length; i++) {
    const userInfo = await UserModel.getUserById(cmts[i].owner_id);
    cmts[i].author = userInfo.rows[0].username;
  }
  res.send(cmts);
};
