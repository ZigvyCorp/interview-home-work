import Comment from "./models/comment.model.js";
import User from "./models/user.model.js";
import Post from "./models/post.model.js";
import connectdb from "./utils/connectdb.js";

const postScraping = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();

  await Promise.all(
    data.map(async (post) => {
      const { userId, id, title, body } = post;
      const author = await userScraping({ id: userId });
      const commentCount = await commentScraping(id);
      await Post.findOneAndUpdate(
        { id },
        { $set: { ...post, commentCount, author } },
        { upsert: true }
      );
    })
  );
};

const commentScraping = async (postId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const data = await res.json();
  await Promise.all(
    data.map(async (comment) => {
      const { id, name, email, body } = comment;
      return Promise.all([
        userScraping({ email }),
        Comment.findOneAndUpdate({ id }, { $set: comment }, { upsert: true }),
      ]);
    })
  );
  return data.length;
};
const userScraping = async ({ id, email }) => {
  if (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    await User.findOneAndUpdate(
      { id: user.id },
      { $set: user },
      { upsert: true, new: true }
    );
    return user.name;
  }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?email=${email}`
  );
  const [user] = await res.json();
  if (!user) return;
  await User.findOneAndUpdate(
    { id: user.id },
    { $set: user },
    { upsert: true, new: true }
  );
  return user.name;
};

await connectdb();
await postScraping();
console.log("done");
process.exit();
