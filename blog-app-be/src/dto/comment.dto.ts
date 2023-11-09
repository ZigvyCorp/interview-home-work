import mongoose, { isValidObjectId } from "mongoose";
import * as yup from "yup";

export const getCommentsPostSchema = yup
	.object({
		id: yup
			.string()
			.required("id is required")
			.trim()
			.transform((value) => {
				if (mongoose.Types.ObjectId.isValid(value)) {
					return value;
				}

				return "";
			}),
	})
	.required();

export type CreateCommentDTO = {
	content: string;
	owner: string;
	post: string;
};

export const createCommentSchema: yup.ObjectSchema<CreateCommentDTO> = yup.object().shape({
	content: yup.string().required("content is required"),
	owner: yup.string().required("owner is required"),
	post: yup.string().required("post is required"),
});

export type CommentResponse = {
	id: string;
	content: string;
	owner: {
		id: string;
		name: string;
	};
	createdAt: string;
};
