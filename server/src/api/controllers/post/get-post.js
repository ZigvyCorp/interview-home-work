import { PostModel, UserModel } from '#root/models/index.js';

export default async (req, res) => {
  const data = await PostModel.getPost();
  var posts = data.rows;
  for(let i = 0; i < posts.length; i++) {
    const userInfo = await UserModel.getUserById(posts[i].owner_id);
    posts[i].author = userInfo.rows[0].username;
  };
  res.send(posts);
};
