import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiConfig } from "../../config/api.config";
import { Col, Row } from "reactstrap";
import ReplyItem from "../../components/ReplyItem";
import MockTags from "../../components/MockTags";
import './PostPage.scss'

const PostPage = () => {
	const { postId } = useParams();
	
	const [postData, setPostData] = useState(null);
	const [replyData, setReplyData] = useState([]);

	const loadPost = useCallback(async () => {
		if (postId === null || postId === undefined) return;

		const postReq = axios.get(
			ApiConfig.Posts.GetById.replace("{{id}}", postId)
		);
		const replyReq = axios.get(
			ApiConfig.Posts.GetCommentsByPost.replace("{{id}}", postId)
		);

		const [postRes, replyRes] = await Promise.all([postReq, replyReq]);
		setPostData(postRes.data);
		setReplyData(replyRes.data);
	}, [postId]);

	useEffect(() => {
		loadPost();
	}, [loadPost]);

	if (!postData) return <></>;

	const {
		id,
		title = "",
		body = "",
		created_time,
		user_display_name,
	} = postData;
	const createdDt = new Date(created_time);

	return (
		<div className="post-page__container">
			<div className="post-item">
				<Row className="post-item__title">
					<Link to={`/posts/${id}`}>
						<h1>{title}</h1>
					</Link>
				</Row>
				<Row>
					<Col xs="8" className="post-item__metadata">
						<p><b>Author</b>: {user_display_name}</p>
						<p><b>Created at</b>: {createdDt.toLocaleDateString()}</p>
					</Col>
					<Col xs="4" className="post-item__tags">
						<MockTags />
					</Col>
				</Row>
				<Row className="post-item__body">
					<p>{body}</p>
				</Row>
				<hr />
				<Row className="post-item__comments">
					{replyData.map((reply, i) => (
						<ReplyItem key={i} reply={reply} />
					))}
				</Row>
			</div>
		</div>
	);
};

export default PostPage;
