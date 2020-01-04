import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import TagsList from './TagsList'
import CommentsList from './CommentsList'
import {
  convertCreatedAt,
  trimPostContent
}from '../../helper'
// import { usersData } from '../../data'

const PostItem = ({ item, users }) => {
	const { id, owner, title, content, created_at, tags } = item
	
	const trimContent = trimPostContent(content)
	const createdAt = convertCreatedAt(created_at)
	const ownerInfo = users.filter(item => item.id === owner)

	return (
		<Card className="border-bottom border-dark m-1">
		  <Card.Body>
		    <Card.Title>
		     	<h1>{title}</h1>
		    </Card.Title>

		    <div className="d-flex flex-row-reverse flex-wrap justify-content-between mb-4">
		    	
				<div className="d-flex flex-wrap w-25 align-items-center justify-content-between">
		    		<TagsList tags={tags} />
		    	</div>

		    	<div className="d-flex flex-column flex-sm-wrap text-left ">
		    		<Card.Text className="mb-0">Author: {ownerInfo[0].username}</Card.Text>
		    		<Card.Text className="mb-0">Created at: {createdAt}</Card.Text>
		    	</div>
		    	
		    </div>

		    <Card.Text className="text-left ">
		      {trimContent}
		      <span><Link to={`/detail/${id}`}>See more</Link></span>
		    </Card.Text>

		    <CommentsList postId={id} />

		  </Card.Body>
		</Card>
	)
}

export default PostItem