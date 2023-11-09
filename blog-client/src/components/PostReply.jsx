import axios from "axios";
import { useState } from "react";
import { ApiConfig } from "../config/api.config";
import "./PostReply.scss";
import { Button } from "reactstrap";
import ReplyItem from "./ReplyItem";

const PostReply = ({ postId, total }) => {
	const [replies, setReplies] = useState([]);
	const [isShow, setShow] = useState(false);

	const toggleShow = async () => {
		setShow(!isShow);

		if (!isShow && replies.length < total) {
			const url = ApiConfig.Posts.GetCommentsByPost.replace(`{{id}}`, postId);
			const { data } = await axios.get(url);
			setReplies(data || []);
		}
	};

	return (
		<div className="post-replies">
			<Button color="link" onClick={toggleShow} className="post-replies__count">
				{total} repilies
			</Button>
			{isShow && <hr/>}
			{isShow &&
				replies.map((comment, i) => <ReplyItem key={i} reply={comment} />)}
		</div>
	);
};

export default PostReply;
