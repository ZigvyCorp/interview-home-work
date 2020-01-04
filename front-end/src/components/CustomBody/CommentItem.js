import React from 'react'
// import Card from 'react-bootstrap/Card'

// import { usersData } from '../../data'
import { convertCreatedAtFromNow } from '../../helper'
import user from '../../assets/profiles/user.png'

const CommentItem = ({ item, users }) => {
	const { owner, content, created_at } = item
	const ownerData = users.filter(item => item.id === owner)
	const createdAt = convertCreatedAtFromNow(created_at)

	return (
		<div className="d-flex">
			<div className="mr-4">
				<img src={user} alt=''/>
			</div>
 
			<div className="d-flex flex-column text-left">
				<p className="bg-light">
					<span className="font-weight-bold">{ownerData[0].username}</span>
					<span className="ml-2 font-weight-lighter text-secondary">{createdAt}</span>
				</p>
				<p>{content}</p>
			</div>

		</div>
	)
}

export default CommentItem