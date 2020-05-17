var HomePageModel = require('../../models/homepage');
var uuid = require('uuid');

class PostService {
    constructor() {
        this.BaseModel = HomePageModel.Post;
    }

    getAllPost(reqObj) {
        return new Promise((resolve, reject) => {
            const { search } = reqObj;
            const conditionMatch = {};
            if (search !== "") {
                conditionMatch.$or = [{ title: { $regex: search, $options: 'i' } },
                { tags: { $elemMatch: { $regex: search, $options: 'i' } } }];
            }
            this.BaseModel.aggregate([
                { $sort: { createdAt: -1 } },
                {
                    $match: conditionMatch,
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'ownerId',
                        foreignField: 'id',
                        as: 'author',
                    },
                },
                {
                    $unwind: '$author',
                },
                {
                    $lookup: {
                        let: { postId: '$id' },
                        from: 'comments',
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                      $and: [
                                        { $eq: ['$postId', '$$postId'] },
                                      ],
                                    },
                                },
                            },
                            {
                                $lookup: {
                                    from: 'users',
                                    localField: 'ownerId',
                                    foreignField: 'id',
                                    as: 'user',
                                },
                            },
                            {   $unwind: '$user' },
                            {
                                $project: {
                                    _id: 0,
                                    id: 1,
                                    user: '$user.name',
                                    content: 1,
                                },
                            },
                        ],
                        as: 'comments',
                    },
                },
                {
                    $project: {
                        _id: 0,
                        id: 1,
                        ownerId: 1,
                        title: 1,
                        content: 1,
                        createdAt: 1,
                        tags: 1,
                        totalComments: { $size: '$comments' },
                        comments: 1,
                        ownerName: '$author.name',
                    },
                },
            ]).then((result) => {
                resolve(result);
            }).catch(e => reject(e));
        });
    }

    createPost(reqObj) {
        return new Promise((resolve, reject) => {
            const {
                ownerId,
                title,
                content,
                tags,
            } = reqObj;
            this.BaseModel.create({
                id: uuid.v1(),
                ownerId,
                title,
                content,
                tags,
            }).then((result) => {
                resolve(result);
            }).catch(e => reject(e));
        });
    }

    updatePost(reqObj) {
        return new Promise((resolve, reject) => {
            const {
                idUpdate,
                title,
                content,
                tags,
            } = reqObj;
            this.BaseModel.update({
                id: idUpdate,
            }, {
                title,
                content,
                tags,
            }).then((result) => {
                resolve(result);
            }).catch(e => reject(e));
        });
    }

    deletePost(id) {
        return new Promise((resolve, reject) => {
            this.BaseModel.deleteOne({
                id,
            }).then((result) => {
                resolve(result);
            }).catch(e => reject(e));
        });
    }
}

module.exports = PostService;