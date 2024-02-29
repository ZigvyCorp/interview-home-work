import { Collapse } from "antd";
import CardComment from "./card_comment";
import { useEffect, useState } from "react";
import { IComment } from "../type";

interface ICommentProps {
	postId: string | number;
}

const Comments = ({ postId }: ICommentProps) => {
	const [comments, setComments] = useState<IComment[]>([]);
	const items = [
		{
			key: postId,
			label: `${comments.length} replies`,
			children: (
				<>
					{comments.length > 0 ? (
						<div className="flex flex-col gap-y-6">
							{comments.map((comment) => (
								<CardComment
									{...comment}
									key={comment.id}
								/>
							))}
						</div>
					) : (
						<>No comments...</>
					)}
				</>
			),
		},
	];
	useEffect(() => {
		const fetchComment = async () => {
			try {
				const response = await fetch(
					`${
						import.meta.env.VITE_API_URL
					}/comments?postId=${postId}`
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const comments: IComment[] = await response.json();
				setComments(comments);
			} catch (error) {
				console.log(error);
			}
		};

		fetchComment();
	}, [postId]);
	return (
		<div>
			<Collapse
				expandIconPosition="end"
				accordion={true}
				items={items}
			></Collapse>
		</div>
	);
};

export default Comments;
