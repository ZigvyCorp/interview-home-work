import React from 'react'
import { connect } from 'react-redux'

import PostItem from './PostItem'
// import { postsData } from '../../data'

const PostsList = ({ postsData, usersData, searchFilter }) => {
	const searchKey = searchFilter.toLowerCase()

	const callbackFilter = searchFilter
	  ? item => item.title.toLowerCase().search(searchKey) >= 0 || item.tags.join(' ').toLowerCase().search(searchKey) >= 0
	  : item => item

	const filterData = postsData.filter(callbackFilter)

	const result = filterData.length > 0
	  ? filterData.map(item => {
				return (
					<PostItem
						key={item.id}
						item={item}
						users={usersData}
					/>
				)
			})
	  : searchFilter
	  	? `There is no post for "${searchFilter}". Please try other key words`
	  	: `There is no post!`

	return (
		<div className=".bg mx-3 pt-3 text-center">
			{result}
		</div>		
	)
}

const mapStateToProps = (state) => ({
	postsData: state.posts,
	usersData: state.users,
})

export default connect(
	mapStateToProps,
)(PostsList)