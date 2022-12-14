import { Button, Card, Col, Divider, Row, Space, Tag, Tree } from "antd";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import "./BlogCard.css";
import { useDispatch } from "react-redux";
import { GET_COMMENTS_OF_POST_SAGA } from "../../redux/types/PostType";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
	const { post, postComments } = props;
	const [collapsed, setCollapsed] = useState({
		reply: false,
		replyTo: false,
	});
	const dispatch = useDispatch();
	const treeData = postComments.map((comment, index) => {
		return {
			title: (
				<div className="flex mt-5">
					<img
						style={{ width: 50, height: 50 }}
						className="rounded-full"
						src="https://picsum.photos/50/50"
						alt="avatar"
					/>
					<div className="ml-5">
						<span className="text-lg font-medium text-gray-500">{comment.email}</span>
						<span className="ml-3 text-base font-normal italic text-slate-400">2 days ago</span>
						<p className="my-2 text-xl font-medium text-justify">{comment.body}</p>
						<Button
							className="p-0 text-lg"
							type="link"
							onClick={() => {
								setCollapsed({ ...collapsed, replyTo: !collapsed.replyTo });
							}}>
							Reply to
						</Button>
					</div>
				</div>
			),
			key: `0-${index}`,
		};
	});
	return (
		<Card
			className="card"
			title={<p className="text-4xl text-center font-bold">{post.title}</p>}
			style={{ width: "80%", margin: "auto" }}>
			<Row>
				<Col span={8}>
					<div className="text-2xl font-semibold">
						<p>Author: User {post.userId}</p>
						<p>Created at: </p>
					</div>
				</Col>
				<Col span={8} offset={8}>
					<Space wrap>
						<Tag color="magenta">magenta</Tag>
						<Tag color="red">red</Tag>
						<Tag color="volcano">volcano</Tag>
						<Tag color="orange">orange</Tag>
						<Tag color="gold">gold</Tag>
						<Tag color="lime">lime</Tag>
						<Tag color="green">green</Tag>
						<Tag color="cyan">cyan</Tag>
						<Tag color="blue">blue</Tag>
						<Tag color="geekblue">geekblue</Tag>
						<Tag color="purple">purple</Tag>
					</Space>
				</Col>
			</Row>
			<div className="my-10 text-3xl text-justify font-semibold">
				{post.body.length > 100 ? (
					<>
						{post.body.slice(0, 100)} ...
						<Link className="text-xl text-gray-400 ml-2" to={`/${post.id}`}>
							See more
						</Link>
					</>
				) : (
					post.body
				)}
			</div>
			<Button
				style={{ fontSize: 20 }}
				type="link"
				onClick={() => {
					setCollapsed({ ...collapsed, reply: !collapsed.reply });
				}}>
				{postComments.length} reply
			</Button>
			<Divider plain>Comments</Divider>
			{!collapsed.reply ? (
				""
			) : (
				<Tree style={{ width: "100%" }} showLine switcherIcon={<DownOutlined />} treeData={treeData} />
			)}
		</Card>
	);
}
