const mongoose = require('mongoose')
const status = require('../constants/constants')
const postModel = require('../models/postModel')

const notFoundPost = 'Not found any post'


const getAllPosts = async (req, res) => {
    const { userId, _page, _limit, title } = req.query
    try {

        if (userId !== undefined && !mongoose.Types.ObjectId.isValid(userId)) {
            status.badRequestStatus(res, 'userId is invalid')
        }
        if (userId === undefined) {
            const postList = await postModel.find().populate('owner')
            const condition = getConditions(_page, _limit, postList)
            return searchTitle(res, title, postList, condition)
        } else {
            const postListOfUser = await postModel.find({ owner: userId }).populate('owner')
            const condition = getConditions(_page, _limit, postListOfUser)
            return searchTitle(res, title, postListOfUser, condition)
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }
}

const getPostById = async (req, res) => {
    let postId = req.params.postId
    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            status.badRequestStatus(res, 'postId is invalid')
        }
        const postInfo = await postModel.findById(postId).populate('owner')
        if (postInfo) {
            status.successStatus(res, postInfo, 'Get post by id successfully')
        } else {
            status.notFoundStatus(res, notFoundPost)
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }
}

const createPost = async (req, res) => {
    const {
        userId,
        title,
        content,
        tags,
        create_at
    } = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            status.badRequestStatus(res, 'userId is invalid')
        }
        if (!title) {
            status.badRequestStatus(res, 'title is required')
        }
        const newPost = {
            _id: new mongoose.Types.ObjectId(),
            owner: userId,
            title,
            content,
            tags,
            create_at
        }
        const createdPost = await postModel.create(newPost)
        status.successCreateStatus(res, createdPost, 'Create new post successfully')
    }
    catch (error) {
        status.errorStatus(res, error)
    }
}

const updatePostById = async (req, res) => {
    let postId = req.params.postId
    const {
        userId,
        title,
        content,
        tags,
        create_at
    } = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            status.badRequestStatus(res, 'postId is invalid')
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            status.badRequestStatus(res, 'userId is invalid')
        }
        if (!title) {
            status.badRequestStatus(res, 'title is unique required')
        }
        // Check owner
        const post = await postModel.findById(postId)
        if (post.owner !== userId) {
            status.badRequestStatus(res, 'Just only author of this post can edit it!')
        } else {
            let updatePost = {
                title,
                content,
                tags,
                create_at
            }
            const updatedPost = await postModel.findByIdAndUpdate(postId, updatePost)
            if (updatePost) {
                status.successStatus(res, updatedPost, 'Update post by id successfully')
            } else {
                status.notFoundStatus(res, notFoundPost)
            }
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }
}

const deletePostById = async (req, res) => {
    let postId = req.params.postId
    let userId = req.params.userId
    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            status.badRequestStatus(res, 'postId is invalid')
        }
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            status.badRequestStatus(res, 'userId is invalid')
        }
        const post = await postModel.findById(postId)
        if (!userId || post.owner !== userId) {
            status.badRequestStatus(res, 'Just only author of this post can delete it!')
        } else {
            const deletedPost = await postModel.findByIdAndDelete(postId)
            if (deletedPost) {
                status.successStatus(res, deletedPost, 'Delete post by id successfully')
            } else {
                status.notFoundStatus(res, notFoundPost)
            }
        }
    }
    catch (error) {
        status.errorStatus(res, error)
    }

}

const getConditions = (_page, _limit, postList) => {
    if (!_page) {
        _page = 0
    }
    if (!_limit) {
        _limit = postList.length
    }
    if (_page || _limit) {
        parseInt(_page)
        parseInt(_limit)
    }
    return {
        _page,
        _limit
    }
}

const searchTitle = (res, title, postList, condition) => {
    if (!title || title === '') {
        const result = postList.slice(condition._page * condition._limit, (condition._page + 1) * condition._limit)
        if (result && result.length > 0) {
            return status.successStatus(res, result, 'Get all posts with pagination successfully', postList.length)
        } else {
            return status.notFoundStatus(res, notFoundPost)
        }
    } else {
        const searchTitle = postList.filter(post => post.title.toLowerCase().includes(title.toLowerCase()))
        if (searchTitle && searchTitle.length > 0) {
            const result = searchTitle.slice(condition._page * condition._limit, (condition._page + 1) * condition._limit)
            if (result && result.length > 0) {
                return status.successStatus(res, result, 'Get all posts with pagination successfully', searchTitle.length)
            } else {
                return status.notFoundStatus(res, notFoundPost)
            }
        } else {
            return status.notFoundStatus(res, notFoundPost)
        }
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePostById,
    deletePostById
}