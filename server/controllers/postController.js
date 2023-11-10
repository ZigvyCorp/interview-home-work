import { Post } from "../model/PostModel.js";

export const createPost = async (req, res) => {
    const {
        user, title, content, tags
    } = req.body
    if (user && title && content && tags) {
        const newPost = await Post.create({
            user, title, content, tags
        })
        return res.status(200).json({
            message: "Created a new Post",
            content: newPost
        })
    } else {
        return res.json({
            status: 400,
            message: "Post is not defined"
        })
    }
}

export const getListPost = async (req, res) => {
    const listBlog = await Post.find();
    return res.status(200).json({
        content: listBlog,
    });
}

export const getPostDetail = async (req, res) => {
    const { postId } = req.params;
    const detailBlog = await Post.findById(postId)
    if (detailBlog) {
        return res.status(200).json({
            content: detailBlog,
        });
    } else {
        return res.status(400).json({
            message: "The Id Post is require",
        });
    }
}

export const updatePost = async (req, res) => {
    const { postId } = req.params;
    const {
        title, content, tags
    } = req.body
    const findPost = await Post.findById(postId);
    findPost.title = title;
    findPost.content = content;
    findPost.tags = tags;
    await findPost.save();
    if (findPost) {
        return res.status(200).json({
            message: "Updated successfully",
            content: findPost,
        })
    } else {
        return res.status(400).json({
            message: "The post is not defined",
        })
    }
}

export const deletePost = async (req, res) => {
    const { postId } = req.params;
    const detailBlog = await Post.findByIdAndDelete(postId)
    if (detailBlog) {
        return res.status(200).json({
            message: "Post is deleted",
        });
    } else {
        return res.status(400).json({
            message: "The Id Post is require",
        });
    }
}