import { Divider, Typography, Avatar, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comments from '../components/Comment'
import { useLoading } from '../hooks/useLoading'
import { getPostById } from '../services/postServices'
import moment from 'moment'
const { Title, Text } = Typography

export default function BlogDetailPage() {
	const [post, setPost] = useState()
	const { id } = useParams()

	const [getPostCurrent, isLoading] = useLoading(async () => {
		const response = await getPostById(id)
		setPost(response)
	}, [id])

	useEffect(() => {
		getPostCurrent()
	}, [getPostCurrent])

	return (
		<div className="post-detail">
			{isLoading ? (
				<Skeleton paragraph={{ rows: 5 }} active></Skeleton>
			) : (
				<>
					<Title level={1}>{post?.title}</Title>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Avatar>{post?.user.name[0]}</Avatar>
						<div
							style={{
								marginLeft: '10px',
							}}
						>
							<strong>{post?.user.name}</strong>
							<div>{moment().format('MMMM DD YYYY, h:mm:ss a')}</div>
						</div>
					</div>
					<Divider />
					<Text>{post?.body.substring(0, 100)}</Text>
					<Divider />
					<div className="post-detail-comments">
						<Title level={3}>Comments</Title>
						<Comments dataSource={post?.comments} />
					</div>
				</>
			)}
		</div>
	)
}
