"use client";
import type { SelectProps } from "antd";
import { Select } from "antd";

export default function Page() {
	const options: SelectProps["options"] = [];

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
		<div>
			<Select
				mode="multiple"
				placeholder="Tags Mode"
				style={{ width: "100%" }}
				onChange={handleChange}
				options={[
					{ value: "tag1", label: "Tag 1" },
					{ value: "tag2", label: "Tag 2" },
					{ value: "tag3", label: "Tag 3" },
				]}
			/>
		</div>
	);
}
