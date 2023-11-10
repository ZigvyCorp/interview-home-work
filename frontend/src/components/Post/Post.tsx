import { useState, useCallback } from "react";
import { IPosts } from "../../types/posts.type";
import classNames from "classnames/bind";
import styles from "./Post.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../types/rootState.type";

const cx = classNames.bind(styles);

interface IProps {
	post: IPosts;
}

interface IColor {
	tag: string;
	color: string;
}

export const Post: React.FC<IProps> = ({ post }) => {
	const [showComment, setShowcomment] = useState(false);
	const { comments } = useSelector((state: RootState) => state);

	const tagColors: IColor[] = [];
	function getRandomColor() {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	for (const tag of post.tags) {
		const randomColor = getRandomColor();
		tagColors.push({ tag, color: randomColor });
	}
	const renderTag = tagColors.map((item, index) => (
		<li
			className={cx("tag")}
			key={index}
			style={{ backgroundColor: `${item.color}` }}
		>
			{item.tag}
		</li>
	));

	const showHandlerButtonComment = useCallback(() => {
		setShowcomment(!showComment);
	}, [showComment]);

	return (
		<div className="p-4 border border-top-0 border-4 border-bottom border-dark">
			<h1 className="text-center fw-bold text-capitalize">
				{post.title}
			</h1>
			<div className="d-flex justify-content-between align-items-center px-4">
				<div>
					<span>Author: {post.username.username}</span>
					<p>Created at: {new Date(post.createdAt).toDateString()}</p>
				</div>
				<ul className="d-flex list-unstyled flex-wrap">{renderTag}</ul>
			</div>
			<p className="px-4">{post?.content}</p>
			<div className="px-4">
				<button
					onClick={() => showHandlerButtonComment()}
					className="border-0 p-2 bg-light"
				>
					{comments.find((comment) => comment.postId === post._id)
						? comments.length
						: 0}{" "}
					replies
				</button>
				<div className="border border-bottom border-2"></div>
				{!showComment && (
					<ul>
						{comments.map((comment) => {
							if (post._id === comment.postId) {
								return (
									<li className="p-2 list-unstyled">
										<img
											src={comment.username?.avatar}
											alt=""
											width="60px"
											height="60px"
											className="rounded-circle"
										/>
										<span className="mx-2">
											{comment.content}
										</span>
									</li>
								);
							}
						})}
					</ul>
				)}
			</div>
		</div>
	);
};
