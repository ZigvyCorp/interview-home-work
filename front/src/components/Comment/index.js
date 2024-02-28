import React from 'react'
import { Typography, Avatar, List } from 'antd'

const { Text } = Typography

export default function Comments({ dataSource, isLoading }) {
	console.log(dataSource)
	return <List dataSource={dataSource} loading={isLoading} renderItem={item => <CommentItem comment={item} />} />
}

export const CommentItem = ({ comment }) => {
	return (
		<List.Item>
			<List.Item.Meta
				avatar={<Avatar>{comment.email[0]}</Avatar>}
				title={<Text>{comment.email}</Text>}
				description={<Text>{comment.body}</Text>}
			/>
		</List.Item>
	)
}
