import React, { useState } from "react";
import { Typography, Space, Flex, Tag } from "antd";
import styles from "./post.module.css";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import Comment from "../comment/comment";
import { IPost } from "../../types/api-response/post";
import { randomColor } from "../../utils/color";
import { IComment } from "../../types/api-response/comment";
import commentAPI from "../../api/comment-api";
import { Link } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;

interface IPostComponentProps {
	post: IPost;
}

export default function Post({ post }: IPostComponentProps) {
	const [comments, setComments] = useState<IComment[]>([]);

	const handleOpenPanel = (key: string[] | string) => {
		if (Array.isArray(key) && key.length === 0) {
			return;
		}

		if (!key) {
			return;
		}

		if (post.numComments > 0 && comments.length === 0) {
			commentAPI.getCommentsPost(post.id).then((data) => {
				setComments(data);
			});
		}
	};

	const items: CollapseProps["items"] = [
		{
			key: "1",
			label: `${post.numComments} ${post.numComments > 1 ? "replies" : "reply"}`,
			children: (
				<div className={styles.comments}>
					{comments.map((cmt) => (
						<Comment comment={cmt} key={cmt.id} />
					))}
				</div>
			),
		},
	];

	return (
		<div className={styles.container}>
			<Link to={`/${post.title.toLowerCase().replaceAll(" ", "-")}-${post.id}`}>
				<Title className={styles.title} level={3}>
					{post.title}
				</Title>
				<Flex justify="space-between">
					<Space direction="vertical">
						<Text>Author: {post.owner.name}</Text>
						<Text>
							Created At:{" "}
							{new Date(post.createdAt).toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
								year: "numeric",
							})}
						</Text>
					</Space>
					<Space className={styles.tags} wrap>
						{post.tags.map((tag, index) => (
							<Tag key={index} color={randomColor()}>
								{tag}
							</Tag>
						))}
					</Space>
				</Flex>
				<Paragraph>{post.content.slice(0, 100)}</Paragraph>
			</Link>

			<Collapse onChange={handleOpenPanel} ghost items={items} />
		</div>
	);
}
