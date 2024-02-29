const Posts = require("../models/postsModel");
const makeResponse = require("../ultils/makeResponse");
const PAGE_SIZE = 5;

// getall
const getPosts = async (req, res) => {
    if (req.query.search && req.query.search !== "") {
        getPostSearch(req, res);
    } else {
        getAllPost(req, res);
    }
}

const getAllPost = async (req, res) => {
    try {
        const offset = (Number(req.query.page || 1) - 1) * PAGE_SIZE;
        const posts = await Posts.aggregate([

            {
                $lookup: {
                    from: 'users',
                    localField: 'owner',
                    foreignField: 'id',
                    as: 'users'
                }
            },
            {
                $lookup: {
                    from: 'comments',
                    localField: 'id',
                    foreignField: 'post',
                    as: 'comments'
                }
            },
            {
                $unwind: '$users'
            },
            {
                $project: {
                    _id: 0,
                    id: 1,
                    title: 1,
                    content: 1,
                    created_at: 1,
                    tags: 1,
                    author: '$users.name',
                    totalComments: { $size: '$comments' }
                }
            },
            {
                $skip: offset
            },
            {
                $limit: PAGE_SIZE
            }
        ]);
        res.status(200).json(makeResponse("success", posts, 200));

    } catch (error) {
        res.status(200).json(makeResponse(error.message, null, 500));
    }
}
const getPostSearch = async (req, res) => {
    try {
        const posts = await Posts.aggregate([
            {
                $match: {
                    title: {
                        $regex: req.query.search,
                        $options: "i" // Tùy chọn "i" cho phép tìm kiếm không phân biệt chữ hoa chữ thường
                    }
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'owner',
                    foreignField: 'id',
                    as: 'users'
                }
            },
            {
                $lookup: {
                    from: 'comments',
                    localField: 'id',
                    foreignField: 'post',
                    as: 'comments'
                }
            },
            {
                $unwind: '$users'
            },
            {
                $project: {
                    _id: 0,
                    id: 1,
                    title: 1,
                    content: 1,
                    created_at: 1,
                    tags: 1,
                    author: '$users.name',
                    totalComments: { $size: '$comments' }
                }
            }
        ]);
        res.status(200).json(makeResponse("success", posts, 200));

    } catch (error) {
        res.status(200).json(makeResponse(error.message, null, 500));
    }
}

// get by id
const getPostById = async (req, res) => {
    try {
        const post = await Posts.aggregate([
            {
                $match: {
                    id: Number(req.params.id)
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'owner',
                    foreignField: 'id',
                    as: 'users'
                }
            },
            {
                $lookup: {
                    from: 'comments',
                    localField: 'id',
                    foreignField: 'post',
                    as: 'comments'
                }
            },
            {
                $unwind: '$users'
            },
            {
                $project: {
                    _id: 0,
                    id: 1,
                    title: 1,
                    content: 1,
                    created_at: 1,
                    tags: 1,
                    author: '$users.name',
                    totalComments: { $size: '$comments' }
                }
            },
        ]);
        if (post.length !== 0) {
            res.status(200).json(makeResponse("success", post[0], 200));
        } else {
            res.status(200).json(makeResponse("Post not found", [], 404))
        }
    } catch (error) {
        res.status(200).json(makeResponse(error.message, null, 500));
    }
}



module.exports = {
    getPostById,
    getPosts,
}
