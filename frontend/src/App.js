import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import PageRender from './PageRender';
import Header from './components/Header';

// import { getPosts } from './redux/actions/post.action';

function App() {
	// const dispatch = useDispatch();

	//Get posts
	// useEffect(() => {
	// 	dispatch(getPosts());
	// }, [dispatch]);
	return (
		<div className='App'>
			<div className='main'>
				<Router>
					<Header />
					<Route exact path='/' component={PageRender} />
					<Route exact path='/:page' component={PageRender} />
					<Route exact path='/:page/:id' component={PageRender} />
				</Router>
			</div>
		</div>
	);
}

export default App;
