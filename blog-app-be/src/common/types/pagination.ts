import * as yup from "yup";

export type GetPaginationDTO = {
	limit: number;
	page: number;
	search?: string;
};

export const getPaginationSchema: yup.ObjectSchema<GetPaginationDTO> = yup.object().shape({
	limit: yup.number().min(1, "limit must greater or equal 0").required("limit is required"),
	page: yup.number().min(0, "page must greater or equal 0").required("page is requied"),
	search: yup.string().optional(),
});

export type PaginationResponse<T> = {
	total: number;
	previous?: {
		page: number;
		limit: number;
	};
	data: T[];
	next?: {
		page: number;
		limit: number;
	};
	rowPerpage: number;
};
