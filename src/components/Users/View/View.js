import React,{ useState } from 'react';
import {useSelector} from 'react-redux';
import './../../Blogs/Blogs.scss';
import avatar from './../../../images/user.png';
import {
	Row,
	Col,
	Collapse, Button, 
	Input
} from 'reactstrap';

const View = () =>{
	const [isOpen, setIsOpen] = useState(false);
	const [reply, setReply] = useState(false);
	const listPostUser = useSelector(state => state.post.listPostUser);
	const user = useSelector(state => state.user.user);
	//toggle reply
	const toggle = () => setIsOpen(!isOpen);
	//toggle border reply
	const toggleReply = () => setReply(!reply);
	return(
			<div className='box'>
			<h1 className='caption'>Your Posts{user ? ` - ${user.name}` : ''}</h1>
			<Row className='d-flex justify-content-center'>
				{
					listPostUser ? listPostUser.map(post =>{
						let date = new Date(post.create_At);
						let createAt = date.getHours() + ':' + date.getMinutes() + ':' +date.getSeconds() + ' ' + date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
						let tags = post.tags.join('#');
						tags = '#' + tags;
						return <Col xs="10" className='blog' key={post._id}>
					<div className='post'>
						<h3>{post.title}</h3>
						<div>
							<span className='author'>Author: {post.name}</span><br />
							<span className='create-at'>Created at: {createAt}</span><br />
							<span className='tags'>Tags: {tags}</span>
						</div><br />
						<p>{post.content}</p>
					</div>
					<div className='comments'>
						<Button color="light" onClick={toggle} style={{ marginBottom: '1rem'}}>10 replies</Button>
						<Collapse isOpen={isOpen}>
							<div className='comment'>
								<div className='avt'><img src={avatar} alt={avatar} /></div>
								<div className='content'>
									<span className='user'>Han Solo<span>&nbsp;&nbsp;&nbsp;a day ago</span></span><br />
									<span className='description'>
										Don't be scared. The things out there that are unknown aren't scary in themselves. They are just unknown at the moment. Take the time to know them before you list them as scary. Then the world will be a much less scary place for you.
									</span><br />
								</div>
							</div><br />
							<div className='comment'>
								<div className='avt'><img src={avatar} alt={avatar} /></div>
								<div className='content'>
									<span className='user'>Han Solo<span>&nbsp;&nbsp;&nbsp;a day ago</span></span><br />
									<span className='description'>
										Don't be scared. The things out there that are unknown aren't scary in themselves. They are just unknown at the moment. Take the time to know them before you list them as scary. Then the world will be a much less scary place for you.
									</span><br />
									<Input style={reply === false ?{ border:'none'} : { border:'1px solid grey'}} onFocus={toggleReply} onBlur={toggleReply} type="text" name="search" placeholder="Reply to" className='w-100'/>
								</div>
							</div><br />
						</Collapse>
					</div>
				</Col>
					}) : ''
				}
			</Row>
		</div>
	);
}

export default View;