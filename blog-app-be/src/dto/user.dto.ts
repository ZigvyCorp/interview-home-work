import * as yup from "yup";

export type CreateUserDTO = {
	name: string;
	username: string;
	password: string;
	dob: string;
};

export const cresteUserSchema: yup.ObjectSchema<CreateUserDTO> = yup
	.object()
	.shape({
		name: yup.string().required("Name is required"),
		username: yup.string().required("Username is required"),
		password: yup.string().required("Password is required"),
		dob: yup.string().required("DOB is required"),
	})
	.required();
