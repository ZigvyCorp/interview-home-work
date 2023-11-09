import { Request, Response } from "express";
import { createPostSchema } from "../dto/post.dto";
import PostService from "../services/post.service";
import { ValidationError } from "yup";
import { GetPaginationDTO, getPaginationSchema } from "../common/types/pagination";

class PostController {
	static async create(req: Request, res: Response) {
		const { body } = req;

		try {
			const data = createPostSchema.validateSync(body, { abortEarly: false, stripUnknown: true });

			const post = await PostService.create(data);
			return res.json({
				message: "Success",
				data: {
					post,
				},
			});
		} catch (e) {
			const error = e as ValidationError;

			return res.status(422).json({ errors: error.errors });
		}
	}

	static async getMany(req: Request, res: Response) {
		const pageNumber = parseInt(req.query.page as string);
		const limit = parseInt(req.query.limit as string);
		const search = req.query.search as string;

		const query: GetPaginationDTO = {
			page: pageNumber,
			limit,
			search,
		};

		try {
			const data = getPaginationSchema.validateSync(query, { abortEarly: false, stripUnknown: true });

			const result = await PostService.getMany(data);

			return res.json({
				message: "Success",
				data: result,
			});
		} catch (e) {
			console.log("e: ", e);
			const error = e as ValidationError;

			return res.status(422).json({ errors: error.errors });
		}
	}

	static async update(req: Request, res: Response) {
		const id = req.params.id;
		const { body } = req;

		try {
			const result = await PostService.update(id, body);

			return res.json({
				message: "Success",
				data: result,
			});
		} catch (e: any) {
			return res.status(400).json({ error: e.message });
		}
	}

	static async delete(req: Request, res: Response) {
		const id = req.params.id;

		try {
			await PostService.delete(id);

			return res.json({
				message: "Success",
				data: "Delete post success",
			});
		} catch (error: any) {
			return res.status(400).json({
				error: error.message,
			});
		}
	}
}

export default PostController;
