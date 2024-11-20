import Blog from "../models/blog"
import asyncHandler from "express-async-handler"

const createBlog = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const { path } = req.file

    const newBlog = await Blog.create({ ...req.body, author: _id, image: path })

    return res.status(200).json({
        success: newBlog ? true : false,
        msg: newBlog ? "Create post successfully!" : "Failed!"
    })



})
const getAllBlogs = asyncHandler(async (req, res) => {
    const queries = { ...req.query }

    // Tách các trường đặc biệt ra khỏi query
    const excludeFields = ["limit", "sort", "page", "fields"]
    excludeFields.forEach(el => delete queries[el])

    // Format lại operators cho đúng cú pháp mongoose
    const queryString = JSON.stringify(queries).replace(/\b(gte|gt|lt|lte)\b/g, el => `$${el}`)
    const formattedQuery = JSON.parse(queryString)

    if (queries?.title) formattedQuery.title = { $regex: queries.title, $options: "i" }

    console.log('formattedQuery: ', formattedQuery);
    let queryCommand = Blog.find(formattedQuery).populate("author", "firstName lastName image")

    // Sorting
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ')
        queryCommand = queryCommand.sort(sortBy)
    }

    // Fields Limit
    if (req.query.fields) {
        const fields = req.query.fields.split(',').join(' ')
        queryCommand = queryCommand.select(fields)
    }

    // Pagination
    const page = req.query.page * 1 || 1
    const limit = req.query.limit * 1 || 6
    const skip = (page - 1) * limit
    queryCommand.skip(skip).limit(limit)

    queryCommand.then(async (response) => {
        const count = await Blog.find(formattedQuery).countDocuments()
        return res.status(200).json({
            success: response ? true : false,
            count,
            response,
        })
    })
        .catch(err => {
            throw new Error(err.message)

        })



})
const updateBlog = asyncHandler(async (req, res) => {

    const { content, title } = req.body
    const { id } = req.params
    const { _id } = req.user

    const blog = await Blog.findById(id)


    if (blog?.author?.toString() === _id) {
        const rs = await Blog.findByIdAndUpdate(id, { content, title, image: req?.file?.path }, { new: true })

        return res.status(200).json({
            success: rs ? true : false,
            msg: rs ? "Update your news succesful!" : "Failed!"
        })
    } else {
        return res.status(203).json({
            success: false,
            msg: "Non-Authoritative Information"
        })
    }



})
const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { _id } = req.user
    const blog = await Blog.findById(id)



    if (blog?.author?.toString() === _id) {
        const rs = await Blog.findByIdAndDelete(id)
        return res.status(200).json({
            success: rs ? true : false,
            msg: rs ? "Remove your news succesful!" : "Failed!"
        })
    } else {
        return res.status(203).json({
            success: false,
            msg: "Non-Authoritative Information"
        })
    }




})


const selectFields = "firstName lastName"
const getCurrentBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    const blog = await Blog.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true }).populate("author", "firstName lastName image").populate("comments.postedBy", "firstName lastName image")
        .populate("likes", selectFields)
    return res.status(200).json({
        success: blog ? true : false,
        blog
    })
})


const uploadImageBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    const blog = await Blog.findByIdAndUpdate(id, { image: req.file.path }, { new: true })

    return res.status(200).json({
        success: blog ? true : false,
        msg: blog ? "Upload image successfully!" : "Cannot upload image!"

    })

})
const commentBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { _id } = req.user
    const { content } = req.body
    const newComment = await Blog.findByIdAndUpdate(id, {
        $push: { comments: { content, postedBy: _id } }
    }, { new: true })

    return res.status(200).json({
        success: newComment ? true : false,
        msg: newComment ? "Comment successfully!" : "Failed!"

    })

})

module.exports = { createBlog, getAllBlogs, updateBlog, deleteBlog, getCurrentBlog, uploadImageBlog, commentBlog }