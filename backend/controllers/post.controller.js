const Posts = require('../models/posts.model');

class APIfeatures {
	constructor(query, queryString) {
		this.query = query;
		this.queryString = queryString;
	}

	paginating() {
		const page = this.queryString.page * 1 || 1;
		const limit = this.queryString.limit * 1 || 3;
		const skip = (page - 1) * limit;
		this.query = this.query.skip(skip).limit(limit);
		return this;
	}
}

const postController = {
	//get all posts
	getPosts: async (req, res) => {
		try {
			const features = new APIfeatures(
				Posts.aggregate([
					{
						$lookup: {
							from: 'comments',
							let: { postId: '$id' },
							pipeline: [
								{ $match: { $expr: { $eq: ['$post', '$$postId'] } } },
								{
									$lookup: {
										from: 'users',
										let: { userId: '$owner' },
										pipeline: [
											{ $match: { $expr: { $eq: ['$id', '$$userId'] } } }
										],
										as: 'user'
									}
								},
								// user: array => object
								{
									$unwind: '$user'
								}
							],
							as: 'comment'
						}
					}
				]),
				req.query
			).paginating();
			const posts = await features.query;
			// const posts = await Posts.aggregate([
			// 	{
			// 		$lookup: {
			// 			from: 'comments',
			// 			let: { postId: '$id' },
			// 			pipeline: [
			// 				{ $match: { $expr: { $eq: ['$post', '$$postId'] } } },
			// 				{
			// 					$lookup: {
			// 						from: 'users',
			// 						let: { userId: '$owner' },
			// 						pipeline: [
			// 							{ $match: { $expr: { $eq: ['$id', '$$userId'] } } }
			// 						],
			// 						as: 'user'
			// 					}
			// 				},
			// 				// user: array => object
			// 				{
			// 					$unwind: '$user'
			// 				}
			// 			],
			// 			as: 'comment'
			// 		}
			// 	}
			// ]);
			res.json({ posts });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	//Get post by id param
	getPost: async (req, res) => {
		try {
			const post = await Posts.aggregate([
				{
					$match: { id: Number(req.params.id) }
				},
				{
					$lookup: {
						from: 'comments',
						let: { postId: '$id' },
						pipeline: [
							{ $match: { $expr: { $eq: ['$post', '$$postId'] } } },
							{
								$lookup: {
									from: 'users',
									let: { userId: '$owner' },
									pipeline: [
										{ $match: { $expr: { $eq: ['$id', '$$userId'] } } }
									],
									as: 'user'
								}
							},
							// user: array => object
							{
								$unwind: '$user'
							}
						],
						as: 'comment'
					}
				}
			]);
			// const post = await Posts.findOne({ id: req.params.id })
			res.json({ post });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	// Search Post
	searchPost: async (req, res) => {
		try {
			const posts = await Posts.find({
				title: { $regex: req.query.title }
			});
			res.json({ posts });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	}
};

module.exports = postController;
