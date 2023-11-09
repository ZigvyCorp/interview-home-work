"use client";
import { signIn } from "@/redux/actions/user.action";
import { useAppDispatch } from "@/redux/store";
import { IError } from "@/types/error";
import { toastError, toastSuccess } from "@/utils/toast";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";

export default function SignInForm() {
	const dispatch = useAppDispatch();
	const router = useRouter();
	type FieldType = {
		email?: string;
		password?: string;
	};

	const onFinish = async (values: ISignUp) => {
		try {
			const res = await dispatch(signIn(values)).unwrap();
			if (res.user) {
				router.push("/");
				toastSuccess("Sign in successfully!");
			}
		} catch (error) {
			toastError((error as IError).message);
		}
	};
	return (
		<section className="">
			<Form
				name="basic"
				labelCol={{ span: 6 }}
				wrapperCol={{
					className: "text-lg font-semibold",
				}}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item<FieldType>
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

				<Form.Item<FieldType>
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

				<Form.Item wrapperCol={{ offset: 18 }}>
					<button
						className="bg-cyan-500 w-full py-2 text-white rounded-3xl tracking-wide font-semibold"
						type="submit"
					>
						Submit
					</button>
				</Form.Item>
			</Form>
		</section>
	);
}
