import React, { useState } from 'react'

import Search from '../Search'
import PostsList from '../PostsList'

const HomePage = () => {
	const [ searchKey, setSearchKey ] = useState('')

	const handleChangeSearchKey = (event) => {
		setSearchKey(event.target.value)
	}

	return (
		<div className="bg-success min-vh-100 pt-3">
			<Search
			  onChange={handleChangeSearchKey}
			  value={searchKey}
			/>
			<PostsList searchFilter={searchKey}/>
		</div>	

	)
}

export default HomePage