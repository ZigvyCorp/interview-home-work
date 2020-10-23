import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ROUTES}  from './routes';
import LoginRegister from './components/LoginRegister/LoginRegister';
import Users from './components/Users/Users';



const showRoute = () =>{
	let xhtml = null;
	xhtml = ROUTES.map(route =>{
		let {component: YourComponent,name, ...attRoute} = route;
		return <Route 
					{...attRoute}
					key={name}
					render={routeProps=>{
						return(
							<Container>
								<Header />
									<YourComponent {...routeProps} />
								<Footer />
							</Container>
						)
					}}
				/>
	});
	return xhtml;
}

const App = props => {
  	return (
	    <Router>
			<Switch>
				{showRoute()}
				<Route path='/login' component={LoginRegister} />
				<Route path='/users' component={Users} />
			</Switch>
	    </Router>
  	);
}

export default App;