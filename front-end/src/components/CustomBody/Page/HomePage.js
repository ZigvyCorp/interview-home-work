import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Search from '../Search'
import PostsList from '../PostsList'

const HomePage = () => {
	const [ searchKey, setSearchKey ] = useState('')

	const handleChangeSearchKey = (event) => {
		setSearchKey(event.target.value)
	}

	return (
		<div className="min-vh-100 pt-3">
			<div className="mx-4 mb-3">
				<Link to='/create' className="btn btn-light w-100">Create a new post</Link>
			</div>
			<Search
			  onChange={handleChangeSearchKey}
			  value={searchKey}
			/>
			<PostsList searchFilter={searchKey}/>
		</div>
	)
}

export default HomePage