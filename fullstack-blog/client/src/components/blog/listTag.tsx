import { bgColor } from "@/utils/color";

interface IProps {
	tag: string;
}

export default function ListTag({ tag }: IProps) {
	const index = tag.length ? (tag.length - 1) % bgColor.length : 0;
	const color = bgColor[index];
	return (
		<span
			style={{
				backgroundColor: color,
			}}
			key={tag}
			className="text-white px-2.5 py-1 rounded-3xl"
		>
			{tag}
		</span>
	);
}
