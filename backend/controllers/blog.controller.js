const blog = require('../models/post')
const user = require('../models/user')
const addBlog = (req, res) => {
    let { title, content, tags } = req.body
    console.log(req.body)
    let newBlog = new blog({
        title,
        content,
        tags,
        owner: 1
    })
    newBlog.save().then(blog => {
        return res.status(200).json({
            code: 200,
            message: "Add blog success!",
        })
    })
        .catch(err => {
            return res.status(500).json({
                code: 500,
                message: err.message,
            })
        })

}

const getBlogs = async (req, res) => {
    const title = req.query.title

    if (title) {
        await blog.aggregate([{ $match: {'title': {'$regex': title}} }, {
            $lookup: {
                from: "users",
                localField: "owner",
                foreignField: "id",
                as: "user_infor"
            },
        },
        {
            $lookup: {
                from: "comments",
                localField: "id",
                foreignField: "post",
                as: "comment_infor"
            },
        },
        ])
            .then((blogs) => {

                return res.status(200).json({
                    code: 200,
                    message: "Add user success!",
                    data: blogs
                })
            })
            .catch(e => {
                return res.status(500).json({
                    code: 500,
                    message: e.message,
                })
            })
    } else {
        await blog.aggregate([{
            $lookup: {
                from: "users",
                localField: "owner",
                foreignField: "id",
                as: "user_infor"
            },
        },
        {
            $lookup: {
                from: "comments",
                localField: "id",
                foreignField: "post",
                as: "comment_infor"
            },
        },
        ])
            .then((blogs) => {

                return res.status(200).json({
                    code: 200,
                    message: "Add user success!",
                    data: blogs
                })
            })
            .catch(e => {
                return res.status(500).json({
                    code: 500,
                    message: e.message,
                })
            })
    }


}

module.exports = {
    addBlog,
    getBlogs
}