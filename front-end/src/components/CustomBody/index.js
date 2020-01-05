import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CreatePostPage from './Page/CreatePostPage'
import DetailPage from './Page/DetailPage'
import HomePage from './Page/HomePage'
import NoMatchPage from './Page/NoMatchPage'

const CustomBody = () => {
	
	return (
		<div className="min-vh-100 pt-3">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/detail/:id" component={DetailPage} />
				<Route exact path="/create" component={CreatePostPage} />
				<Route component={NoMatchPage} />
			</Switch>
		</div>	

	)
}

export default CustomBody