import React, { useState } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

// import { commentsData } from '../../data'
import { getTotalComments } from '../../helper'
import CommentItem from './CommentItem'


const CommentsList = ({ commentsData, usersData, postId, showComments = false }) => {
	const [ visible, setVisible ] = useState(showComments)

	const toggleShowComments = () => {
		setVisible(!visible)
	}

	const listOfComments = commentsData.filter(item => item.post === postId)
	
	const totalCommentsOfPost = getTotalComments(listOfComments.length)

	const classNameOfComments = visible ? '' : 'd-none'

	const comments = listOfComments.map((item, index) => (
		<ListGroup.Item key={index}>
			<CommentItem key={item.id} item={item} users={usersData} />
		</ListGroup.Item>
	))

	return (
		<Card onClick={toggleShowComments}>
		  <Card.Header className="text-left font-weight-light border-0">{totalCommentsOfPost}</Card.Header>
			<ListGroup className={classNameOfComments}>
				{comments}
			</ListGroup>
		</Card>
	)
}

const mapStateToProps = (state) => ({
	commentsData: state.comments,
	usersData: state.users,
})

export default connect(
	mapStateToProps,
)(CommentsList)