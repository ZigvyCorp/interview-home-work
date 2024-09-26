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
      return Promise.all([
        Post.findOneAndUpdate({ id }, { $set: post }, { upsert: true }),
        commentScraping(id),
        userScraping({ id: userId }),
      ]);
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
};
const userScraping = async ({ id, email }) => {
  if (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return User.findOneAndUpdate(
      { id: user.id },
      { $set: user },
      { upsert: true, new: true }
    );
  }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?email=${email}`
  );
  console.log(`https://jsonplaceholder.typicode.com/users?email=${email}`);
  const [user] = await res.json();
  if (!user) return;
  return User.findOneAndUpdate(
    { id: user.id },
    { $set: user },
    { upsert: true, new: true }
  );
};

await connectdb();
await postScraping();
