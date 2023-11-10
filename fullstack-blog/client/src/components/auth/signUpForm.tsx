"use client";
import { signUp } from "@/redux/actions/user.action";
import { useAppDispatch } from "@/redux/store";
import { IError } from "@/types/error";
import { toastError } from "@/utils/toast";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
	const dispatch = useAppDispatch();
	const router = useRouter();

	type FieldType = {
		email?: string;
		username?: string;
		name?: string;
		password?: string;
		confirmPassword?: string;
	};

	const onFinish = async (values: ISignUp) => {
		try {
			const res = await dispatch(signUp(values)).unwrap();
			if (res.newUser) {
				router.push("/");
			}
		} catch (error) {
			toastError((error as IError).message);
		}
	};

	return (
		<section className="">
			<Form
				name="basic"
				labelCol={{
					span: 10,
				}}
				wrapperCol={{
					className: "text-lg font-semibold",
				}}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item
					name="email"
					label="E-mail"
					rules={[
						{
							type: "email",
							message: "The input is not valid E-mail!",
						},
						{
							required: true,
							message: "Please input your E-mail!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Nickname"
					name="username"
					tooltip="What do you want others to call you?"
					rules={[{ required: true, message: "Please input your nickname!", whitespace: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item<FieldType>
					label="Name"
					name="name"
					rules={[{ required: true, message: "Please input your name!" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name="password"
					label="Password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
						{
							min: 8,
							message: "Password must be at least 8 characters!",
						},
					]}
					hasFeedback
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name="confirm"
					label="Confirm Password"
					dependencies={["password"]}
					hasFeedback
					rules={[
						{
							required: true,
							message: "Please confirm your confirm password!",
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve();
								}
								return Promise.reject(
									new Error("The new password that you entered do not match!")
								);
							},
						}),
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item className="flex-center w-full">
					<button
						className="bg-cyan-500 px-10 py-2 text-white rounded-3xl tracking-wide font-semibold"
						type="submit"
					>
						Submit
					</button>
				</Form.Item>
			</Form>
		</section>
	);
}
