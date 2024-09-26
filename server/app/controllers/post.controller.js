const { default: mongoose } = require("mongoose")
const postModel = require("../models/post.model")
const userModel = require("../models/user.model")

const createPost = async (req, res) => {
    // B1 Thu thập dữ liệu
    const { title, content } = req.body
    const authorId = req.params.authorId
    // B2 Kiểm tra dữ liệu
    if (!title) {
        return res.status(400).json({
            status: "Bad request",
            message: "title is required"
        })
    }
    if (!content) {
        return res.status(400).json({
            status: "Bad request",
            message: "content is required"
        })
    }
    if (!authorId) {
        return res.status(400).json({
            status: "Bad request",
            message: "author is required"
        })
    }
    // B3 Xử lý API
    const newPost = {
        _id: new mongoose.Types.ObjectId,
        author: authorId,
        title,
        content,
    }
    try {

        var result = await postModel.create(newPost)
        var pushPost = await userModel.findByIdAndUpdate(authorId, { $push: { post: result._id } })
        return res.status(201).json({
            result
        });
    } catch (error) {
        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }

}
// Hàm lấy danh sách post
const getAllPost = async (req, res) => {
    // B1 Thu thập dữ liệu
    // B1 Thu thập dữ liệu
    const title = req.query.title
    const condition = {}
    // B2 Kiểm tra dữ liệu
    if (title) {
        condition.title = { "$regex": title }
    }
    // B3 Xử lý API

    try {
        var result = await postModel.find(condition).populate("author").populate("comment")
        // Sử dụng Promise.all để đợi tất cả các truy vấn hoàn thành
        const getDetail = await Promise.all(
            result.map(async (element) => {
                const items = await Promise.all(
                    element.comment.map(async (e, index) => {
                        const details = await userModel.findById(e.user)
                        var left = {
                            user: details.name,
                            content: e.content
                        }
                        return left;
                    }
                    ));
                return items
            })
        );
        const data = {
            result: result,
            comment: getDetail
        }
        return res.status(200).json({
            data
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }
}
// Hàm lấy user bằng id
const getPostById = async (req, res) => {
    // B1 Thu thập dữ liệu
    const postId = req.params.postId
    // B2 Kiểm tra dữ liệu
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).json({
            status: "Bad request",
            message: "Id undefined"
        })
    }
    // B3 Xử lý API
    try {
        var result = await postModel.findById(postId)
        return res.status(200).json({
            result
        });
    } catch (error) {
        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }
}
// Hàm update post
const updatePostById = async (req, res) => {
    // B1 Thu thập dữ liệu
    const id = req.params.postId
    const { title, content } = req.body
    // B2 Kiểm tra dữ liệu
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            status: "Bad request",
            message: "Id undefined"
        })
    }
    const newData = {
        title,
        content
    }
    // B3 Xử lý API
    try {
        var result = await postModel.findByIdAndUpdate(id, newData, { new: true })
        return res.status(200).json({
            result
        });
    } catch (error) {
        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }
}
// Hàm xoa post
const deletePostById = async (req, res) => {
    // B1 Thu thập dữ liệu
    const id = req.params.postId
    // B2 Kiểm tra dữ liệu
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            status: "Bad request",
            message: "Id undefined"
        })
    }

    // B3 Xử lý API
    try {
        var result = await postModel.findByIdAndDelete(id)
        const user = await userModel.findById(result.author);
        user.post.pull(result._id);
        await user.save();
        return res.status(200).json({
            message: "Post deleted "
        });
    } catch (error) {
        return res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        })
    }
}
module.exports = { createPost, getAllPost, getPostById, updatePostById, deletePostById }