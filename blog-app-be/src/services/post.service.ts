import { GetPaginationDTO, PaginationResponse } from "../common/types/pagination";
import { CreatePostDTO, PostResponse } from "../dto/post.dto";
import Post from "../models/post";
import User, { IUserModel } from "../models/user";
import CommentService from "./comment.service";

class PostService {
	static async create(data: CreatePostDTO) {
		const post = new Post(data);

		await post.save();

		return post;
	}

	static async getMany(data: GetPaginationDTO) {
		let query: any = {};

		if (data.search) {
			query = {
				title: { $regex: data.search, $options: "i" },
			};
		}

		const numsPost = await Post.countDocuments(query).exec();
		const startIndex = data.page * data.limit;
		const endIndex = (data.page + 1) * data.limit;

		const result: PaginationResponse<PostResponse> = {
			total: numsPost,
			data: [],
			rowPerpage: data.limit,
		};

		if (startIndex > 0) {
			result.previous = {
				page: data.page - 1,
				limit: data.limit,
			};
		}

		if (endIndex < numsPost) {
			result.next = {
				page: data.page + 1,
				limit: data.limit,
			};
		}

		const posts = await Post.find(query)
			.populate("owner", "_id name")
			.sort({ createdAt: "desc" })
			.skip(startIndex)
			.limit(data.limit)
			.exec();

		const postsData: PostResponse[] = [];
		for (const post of posts) {
			const numComments = await CommentService.countCommentsPost(post._id.toString());

			postsData.push({
				id: post._id.toString(),
				title: post.title,
				content: post.content,
				owner: {
					id: (post.owner as IUserModel)._id.toString(),
					name: (post.owner as IUserModel).name,
				},
				tags: post.tags,
				createdAt: post.createdAt as string,
				numComments,
			});
		}

		result.data = postsData;

		return result;
	}

	static async update(id: string, updateData: Partial<CreatePostDTO>) {
		const post = await Post.findById(id);

		if (!post) {
			throw new Error("post not found.");
		}

		const updatedPost = await Post.findByIdAndUpdate(id, updateData, { new: true });

		return updatedPost;
	}

	static async delete(id: string) {
		const post = await Post.findById(id);
		if (!post) {
			throw new Error("post not found.");
		}
		await Post.findByIdAndDelete(id);
	}
}

export default PostService;
