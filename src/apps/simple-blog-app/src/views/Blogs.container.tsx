import React from 'react';
import BlogWrapperContainer from './Blogs/BlogWrapper.container';
import HeaderBar from './Blogs/HeaderBar.view';
interface IProps {
}

interface IState {
}
class Blogs extends React.Component<IProps, IState> {
	render() {
		return (
			<>
				<HeaderBar />
				<BlogWrapperContainer />
			</>
		)
	}
}

export default Blogs;
