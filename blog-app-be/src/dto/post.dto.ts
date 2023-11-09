import * as yup from "yup";

export type CreatePostDTO = {
	title: string;
	owner: string;
	content: string;
	tags: string[];
};

export const createPostSchema: yup.ObjectSchema<CreatePostDTO> = yup.object().shape({
	title: yup.string().required("Title is required"),
	owner: yup.string().required("Title is required"),
	content: yup.string().required("Title is required"),
	tags: yup
		.array()
		.of(yup.string().required())
		.min(1, "Tags has at least one item")
		.required("Tags is required"),
});

export type PostResponse = {
	id: string;
	title: string;
	content: string;
	owner: {
		id: string;
		name: string;
	};
	createdAt: string;
	tags: string[];
	numComments: number;
};
