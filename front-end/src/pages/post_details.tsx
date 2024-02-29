import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IComment, IPost } from "../type";
import CardComment from "../components/card_comment";
import { Button, Divider } from "antd";
import CardPost from "../components/card_post";

const PostDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const [post, setPost] = useState<IPost>({} as IPost);
	const [comments, setComments] = useState<IComment[]>([]);
	useEffect(() => {
		const fetchSinglePost = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_URL}/posts/${id}`
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const postResult: IPost = await response.json();
				setPost(postResult);
			} catch (error) {
				console.log(error);
			}
		};

		const fetchComment = async () => {
			try {
				const response = await fetch(
					`${
						import.meta.env.VITE_API_URL
					}/comments?postId=${post?.id}`
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const commentsResult: IComment[] =
					await response.json();
				setComments(commentsResult);
			} catch (error) {
				console.log(error);
			}
		};

		fetchSinglePost();
		fetchComment();
	}, [id, post.id]);

	if (!id || !post) {
		return <>Post Not Found...</>;
	}

	return (
		<>
			<div className="w-full flex justify-between items-center mb-4">
				<h4 className="text-3xl font-semibold">
					Details Post
				</h4>
				<Button
					size="large"
					type="dashed"
					onClick={() => navigate(-1)}
				>
					Back
				</Button>
			</div>
			{/* Post and Comments */}
			<CardPost
				post={post}
				children={
					<>
						{comments.length > 0 ? (
							<>
								<p className="text-[#4096ff]">
									{comments.length +
										" "}
									comments
								</p>
								<Divider className="mt-[10px] mb-[24px]" />
								<div className="flex flex-col gap-y-6">
									{comments.map(
										(
											comment
										) => (
											<CardComment
												{...comment}
												key={
													comment.id
												}
											/>
										)
									)}
								</div>
							</>
						) : (
							<>No comments...</>
						)}
					</>
				}
			/>
		</>
	);
};

export default PostDetails;
