import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import Search from './Search'
// import PostsList from './PostsList'
import CreatePage from './Page/CreatePage'
import DetailPage from './Page/DetailPage'
import HomePage from './Page/HomePage'
import NoMatchPage from './Page/NoMatchPage'

const CustomBody = () => {
	
	return (
		<div className="bg-success min-vh-100 pt-3">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/detail/:id" component={DetailPage} />
				<Route exact path="/create" component={CreatePage} />
				<Route component={NoMatchPage} />
			</Switch>
		</div>	

	)
}

export default CustomBody