import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

import TagsList from '../TagsList'
import CommentsList from '../CommentsList'
import {
  convertCreatedAt,
}from '../../../helper'

const DetailPage = ({ match, postsData, usersData }) => {
	console.log(match)

	const post = postsData.filter(item => item.id === parseInt(match.params.id))
	const { id, owner, title, content, created_at, tags } = post[0]
	
	const createdAt = convertCreatedAt(created_at)

	const ownerInfo = usersData.filter(item => item.id === owner)

	return (
		<div className="bg-success min-vh-100 pt-3 mx-3">
			<Card className="border-bottom border-dark m-1">
			  <Card.Body>

			    <Card.Title className="text-center">
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
			      {content}
			    </Card.Text>

			    <CommentsList postId={id} showComments={true}/>

			  </Card.Body>
			</Card>
		</div>
	)
}

const mapStateToProps = (state) => ({
	postsData: state.posts,
	usersData: state.users,
})

export default connect(
	mapStateToProps
)(DetailPage)