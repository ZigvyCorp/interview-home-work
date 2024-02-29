import { Avatar } from "antd";
import { IComment } from "../type";

const CardComment = ({ body, id, name, email }: IComment) => {
	return (
		<div className="flex gap-x-5">
			{/* Image */}
			<Avatar
				alt="Error"
				size="large"
				shape="circle"
				src={`https://source.unsplash.com/random?/200x200?${
					Math.floor(Math.random() * (100 - 0)) +
					(id as number)
				}`}
			/>
			{/* Content */}
			<div className="flex-1">
				<p className="text-[#606060] text-sm capitalize font-medium">
					{name} -{" "}
					<span className="text-[#aaa9a9] text-xs font-medium">
						{email}
					</span>
				</p>
				<p className="text-[#606060] text-base font-normal mt-[1px] mb-2">
					{body}
				</p>
				<p className="text-[#606060] opacity-80 text-sm capitalize font-normal hover:underline hover:cursor-pointer">
					Reply
				</p>
			</div>
		</div>
	);
};

export default CardComment;
