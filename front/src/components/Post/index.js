import { Avatar, Card } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Comments from '../Comment'

const Post = ({ author, title, content, postId, comments }) => {
	console.log(comments)
	const [showComments, setShowComments] = useState(false)

	const toggleComments = () => {
		setShowComments(!showComments)
	}

	return (
		<Card
			style={{ width: '100%', marginBottom: '20px' }}
			actions={[<a onClick={toggleComments}>{showComments ? 'Hide Comments' : 'Show Comments'}</a>]}
		>
			<Link to={`/blogs/${postId}`}>
				<h2 style={{ textAlign: 'center' }}>{title}</h2>
			</Link>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Avatar>{author[0]}</Avatar>
				<div
					style={{
						marginLeft: '10px',
					}}
				>
					<strong>{author}</strong>
					<div>{moment().format('MMMM DD YYYY, h:mm:ss a')}</div>
				</div>
			</div>
			<p>{content.slice(0, 100)}...</p>
			{showComments && <Comments dataSource={comments} />}
		</Card>
	)
}

export default Post
