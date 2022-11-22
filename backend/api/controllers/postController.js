const post = require("../../models/posts")
const user = require('../../models/users')
const { BAD_REQUEST, SUCCESS_OK, LIMIT_PAGING } = require('../../library/constant')
exports.createPost = async (req, res) => {
    let owner = req.userId
    let { content } = req.body

    let newPost = new post({
        owner: owner,
        content: content
    })
    newPost.save()
        .then((newPost) => {
            newPost.populate('owner').then((newPost) => {
                return res.status(SUCCESS_OK).json(newPost)
            })

        })
        .catch(e => {
            return res.status(BAD_REQUEST).json({ message: e.message })
        })
}

exports.getPosts = (req, res) => {
    const owner = req.userId
    post.find()
        .sort({ createdAt: -1, }).limit(LIMIT_PAGING).skip((req.query.page || 0) * LIMIT_PAGING)
        .populate('owner')
        // .populate({
        //     path: 'commentPost',
        //     populate: { path: 'owner' },
        //     options: {
        //         limit: 2,
        //         sort: { createdAt: -1 },
        //         skip: req.params.pageIndex * 2
        //     }
        // })
        .then(posts => {
            return res.status(SUCCESS_OK).json(posts)
        })
        .catch(e => {
            return res.status(BAD_REQUEST).json({ message: e.message })
        })
}


exports.deletePost = (req, res) => {
    let postID = req.params.postID
    let userId = req.userId
    // người tạo mới được phép xóa 
    post.findOneAndRemove({ _id: postID, owner: userId })
        .then(data => {
            if (!data)
                return res.status(BAD_REQUEST).json({ message: "không tìm thấy bài viết" })
            return res.status(SUCCESS_OK).json({ message: 'Xóa thành công!'})
        })
        .catch(e => {
            return res.status(BAD_REQUEST).json({ message: e.message })
        })
}

exports.updatePost = async (req, res) => {
    var owner = req.userId
    var postID = req.params.postID
    var { content } = req.body


    newData = {
        content: content,
    }
    // chỉ cho cập nhật nếu đúng owner đã tạo bài viết
    post.findOneAndUpdate({ _id: postID, owner: owner }, newData, { new: true })
        .then((post) => {
            if (!post)
                return res.status(BAD_REQUEST).json({ message: POST_NOT_FOUND })

            return res.status(SUCCESS_OK).json(post)
        })
        .catch(e => {
            return res.status(BAD_REQUEST).json({ message: e.message })
        })

}


