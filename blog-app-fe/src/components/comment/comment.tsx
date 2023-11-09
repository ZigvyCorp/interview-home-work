import React from "react";
import { Space, Avatar, Typography, Button } from "antd";
import styles from "./comment.module.css";
import { IComment } from "../../types/api-response/comment";
import moment from "moment";

const { Text, Paragraph } = Typography;

interface ICommentProps {
	comment: IComment;
}

export default function Comment({ comment }: ICommentProps) {
	return (
		<Space align="start" size={16}>
			<Avatar src="https://i.pinimg.com/564x/91/bf/d7/91bfd7d5581ce1d8ea19b2050067069b.jpg" size={36} />
			<div>
				<Space>
					<Text className={styles.name}>{comment.owner.name}</Text>
					<Text className={styles["time-online"]}>{moment(comment.createdAt).fromNow()}</Text>
				</Space>
				<Paragraph>{comment.content}</Paragraph>
				<p className={styles.reply}>Reply to</p>
			</div>
		</Space>
	);
}
