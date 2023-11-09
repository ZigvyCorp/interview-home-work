import type { SelectProps } from "antd";
import { Form, Input, Modal, Select } from "antd";
import { useState } from "react";

export default function NewBlog() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const onFinish = (values: any) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	const options: SelectProps["options"] = [];

	type FieldType = {
		title?: string;
		body?: string;
		tag?: string[];
	};
	const { TextArea } = Input;

	for (let i = 10; i < 36; i++) {
		options.push({
			value: i.toString(36) + i,
			label: i.toString(36) + i,
		});
	}

	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<section>
			<button
				onClick={showModal}
				className="w-28 py-4 rounded-3xl border-none outline-none bg-cyan-500 text-white tracking-wide"
			>
				+ New Blog
			</button>
			<Modal title="Add new blog" open={isModalOpen} footer={null}>
				<Form
					name="basic"
					labelCol={{ span: 3 }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item<FieldType>
						label="Title"
						name="title"
						rules={[{ required: true, message: "Please input your title!" }]}
					>
						<Input />
					</Form.Item>

					<Form.Item<FieldType>
						label="Body"
						name="body"
						rules={[{ required: true, message: "Please input your body!" }]}
					>
						<TextArea rows={4} />
					</Form.Item>
					<Form.Item<FieldType>
						label="Tags"
						name="tag"
						rules={[{ required: true, message: "Please input your tags!" }]}
					>
						<Select
							mode="multiple"
							// placeholder="Tags Mode"
							onChange={handleChange}
							options={options}
						/>
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
			</Modal>
		</section>
	);
}
