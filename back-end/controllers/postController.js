import * as postService from '../services/postService.js';

export const getAllPost = async (req, res) => {
  try {
    const posts = await postService.getAllPost(req.query);
    return res.json(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await postService.getPost(req.params.id);
    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }
    return res.json(post);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    return res.json(post);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await postService.updatePost(req.params.id, req.body);
    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }
    return res.json(post);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await postService.deletePost(req.params.id);
    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }
    res.json({ message: 'Post is deleted' });
  } catch (error) {
    return res.status(500).send(error);
  }
};
