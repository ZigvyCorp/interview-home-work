import { Col, Row } from "reactstrap";
import "./PostItem.scss";
import PostReply from "../../components/PostReply";
import { Link } from "react-router-dom";
import MockTags from "../../components/MockTags";

const PostItem = ({ post }) => {
	const {
		id,
		title = "",
		body = "",
		created_time,
		user_display_name,
		comments_count,
	} = post;

	const shortenBody = body.length > 100 ? body.substr(0, 100) + "..." : body;
	const createdDt = new Date(created_time);

	return (
		<div className="post-item">
			<Row className="post-item__title">
				<Link to={`/posts/${id}`}>
					<h3>{title}</h3>
				</Link>
			</Row>
			<Row>
				<Col xs="8" className="post-item__metadata">
					<p>Author: {user_display_name}</p>
					<p>Created at: {createdDt.toLocaleDateString()}</p>
				</Col>
				<Col xs="4" className="post-item__tags">
					<MockTags/>
				</Col>
			</Row>
			<Row className="post-item__body">
				<p>{shortenBody}</p>
			</Row>
			<Row className="post-item__comments">
				<PostReply postId={id} total={comments_count} />
			</Row>
		</div>
	);
};

export default PostItem;
