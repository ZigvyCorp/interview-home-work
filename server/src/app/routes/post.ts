import express from "express";
import Post from "../models/post";
import User from "../models/user";
import Comment from "../models/comment";
const router = express.Router();
import auth from "../middleware/auth";

router.get("/posts", async (req, res) => {
  const { limit = 5, index, ...queries }: any = req.query;

  try {
    const posts = await Post.find(req.query).limit(limit);
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/posts/:id/comments", async (req, res) => {
  const { id: _id } = req.params;
  const { limit = 5 }: any = req.query;
  try {
    const comments = await Comment.find({ post: _id })
      .limit(limit)
      .limit(limit)
      .sort("-price");
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/posts/:id", async (req, res) => {
  const { id: _id } = req.params;
  try {
    const post: any = await Post.findOne({ _id });
    const user = await User.findOne({ _id: post.owner });

    res.status(200).send({ ...post.toObject(), owner: user });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/posts/create", auth, async (req: any, res) => {
  try {
    const post = new Post({ ...req.body, owner: req.user._id });

    post.save();
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/posts/:id/delete", auth, async (req, res) => {
  const { id: _id } = req.params;
  try {
    const post = await Post.findOneAndDelete({ _id });
    post.save();
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/posts/:id/edit", auth, async (req, res) => {
  const { id: _id } = req.params;
  const updates = Object.keys(req.body);
  const allowedValidator: any = ["name", "price", "description"];
  const isValidOperation = updates.every((update) =>
    allowedValidator.includes(update)
  );
  if (!isValidOperation) {
    res.status(500).send({ error: "Invalid updates!" });
  }
  try {
    const post: any = await Post.findOne({ _id });
    updates.forEach((update) => (post[update] = req.body[update]));
    post.save();
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/posts/:pId/comments/create", auth, async (req: any, res) => {
  const { pId } = req.params;
  try {
    const comment = new Comment({
      ...req.body,
      post: pId,
      owner: req.user._id,
    });

    comment.save();
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
