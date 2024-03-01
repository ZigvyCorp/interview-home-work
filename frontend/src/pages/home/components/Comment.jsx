import { Avatar, Card, Typography } from "antd";

export const Comment = ({ comment }) => {
	return (
		<Card bordered={false} className="!shadow-none !bg-transparent">
			<Card.Meta
				title={
					<Typography.Text className="font-medium text-stone-500">
						{comment.name || comment?.username || "Anonymous"}
						<span className="text-stone-400 ml-2">a day ago</span>
					</Typography.Text>
				}
				description={
					<>
						<span className="block mb-2">{comment.body}</span>
						<span className="block font-medium text-stone-500 cursor-pointer hover:text-stone-300 transition-colors">
							Reply to
						</span>
					</>
				}
				avatar={
					<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
				}
			/>
		</Card>
	);
};
