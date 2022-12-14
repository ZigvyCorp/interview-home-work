import { Button, Card, Col, Divider, Row, Space, Tag, Tree } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_POSTS_SAGA, GET_COMMENTS_OF_POST_SAGA } from "../../redux/types/PostType";

export default function Detail(props) {
	const { postId } = useParams();

	const [collapsed, setCollapsed] = useState({
		reply: false,
		replyTo: false,
	});
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: GET_COMMENTS_OF_POST_SAGA, postId });
	}, []);
	const { allPosts, comments } = useSelector((state) => state.PostReducer);
	const post = allPosts.filter((post) => post.id === Number(postId));

	const treeData = comments.map((comment, index) => {
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
		<div className="mt-10">
			<Card
				className="card"
				title={<p className="text-4xl text-center font-bold">{post[0].title}</p>}
				style={{ width: "80%", margin: "auto" }}>
				<Row>
					<Col span={8}>
						<div className="text-2xl font-semibold">
							<p>Author: User {post[0].userId}</p>
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
				<div className="my-10 text-3xl text-justify font-semibold">{post[0].body}</div>
				<Button
					style={{ fontSize: 20 }}
					type="link"
					onClick={() => {
						setCollapsed({ ...collapsed, reply: !collapsed.reply });
					}}>
					{comments.length} reply
				</Button>
				<Divider plain>Comments</Divider>
				{!collapsed.reply ? (
					""
				) : (
					<Tree style={{ width: "100%" }} showLine switcherIcon={<DownOutlined />} treeData={treeData} />
				)}
			</Card>
			<Outlet />
		</div>
	);
}
