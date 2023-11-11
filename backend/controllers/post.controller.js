const httpStatus = require('http-status');
const Posts = require('../models/postModel');

const postController = {
    createPost: async (req, res) => {
        try {
            const { title, content, tags } = req.body;
            const newPost = new Posts({ title, content, owner: req.user._id, tags });
            await newPost.save();
            return res.status(httpStatus.CREATED).send({
                message: "Create post successfully!",
                post: {
                    ...newPost._doc,
                    owner: req.user,
                    comments_count: 0
                }
            });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    getPosts: async (req, res) => {
        try {
            let { page, perPage } = req.query;

            page = parseInt(page);
            perPage = parseInt(perPage);

            let skip = (page - 1) * perPage;
            let limit = perPage;

            let query = [
                {
                    $lookup: {
                        from: "users",
                        localField: "owner",
                        foreignField: "_id",
                        as: "owner"
                    }
                },
                {
                    $unwind: "$owner"
                },
            ];

            let keyword = req.query.keyword || "";

            if (keyword) {
                query.push({
                    $match: {
                        $or: [
                            {
                                title: { $regex: req.query.keyword }
                            }
                        ]
                    }
                });
            }

            const totalPost = await Posts.countDocuments({ title: { $regex: keyword, $options: "i" } });

            query.push({
                $sort: {
                    created_at: -1
                }
            });

            query.push({
                $skip: skip
            });

            query.push({
                $limit: limit
            });

            query.push({
                $project: {
                    "_id": 1,
                    "title": 1,
                    "content": 1,
                    "tags": 1,
                    "owner": 1,
                    "created_at": 1,
                    "comments_count": { $size: { "$ifNull": ["$comments", []] } },
                }
            });

            const posts = await Posts.aggregate(query);

            return res.status(httpStatus.OK).send({
                message: "Get posts successfully!",
                posts,
                perPage: perPage,
                currentPage: page,
                totalItems: totalPost,
                totalPages: Math.ceil(totalPost / parseInt(perPage))
            });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    getPost: async (req, res) => {
        try {
            const post = await Posts.findById(req.params.id);
            if (!post) {
                return res.status(httpStatus.NOT_FOUND).send({
                    message: "Not found!"
                });
            }
            return res.status(httpStatus.OK).send({
                message: "Get post successfully!",
                post
            });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
    }
};

module.exports = postController;