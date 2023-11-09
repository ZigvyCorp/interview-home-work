import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { selectPost } from "../redux/reducers/postSlice";
import { Flex, Space, Tag, Typography } from "antd";
import { randomColor } from "../utils/color";
import styles from "../components/post/post.module.css";

const { Title, Text, Paragraph } = Typography;

export default function PostDetail() {
	const { slug } = useParams();

	const [postId, setPostId] = useState("");

	const post = useAppSelector((state) => selectPost(state, postId));

	useEffect(() => {
		if (slug) {
			const arrStr = slug.split("-");

			setPostId(arrStr.pop() as string);
		}
	}, [slug]);

	return post ? (
		<div>
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
			<Paragraph>{post.content}</Paragraph>
		</div>
	) : (
		<p>No data found</p>
	);
}
