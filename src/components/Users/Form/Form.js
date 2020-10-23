import React,{useState} from 'react';
import './Form.scss';
import {useDispatch,useSelector} from 'react-redux';
import {confirmValidate} from './validate';
import {addPost} from './../../../actions/post';
import { message } from 'antd';
const Form = (props) =>{
	const dispatch = useDispatch();
	const user = useSelector(state => state.user.user);
	const {onCloseForm} = props;
	const [post,setPost] = useState(
		{
			title:'',
			content:'',
			tags:''
		}
	);
	const [validPost,setValidPost] = useState(
		{
			title:'',
			content:'',
			tags:''
		}
	);
	const onChangeForm = (e) =>{
		let target = e.target;
		let name = target.name;
		let value = target.value;
		let newValidate = validPost;
		switch(name){
			case 'title':
				newValidate.title = value.length <= 0 ? 'Please Enter Title !!!' : '';
				break;
			case 'content':
				newValidate.content = value.length <= 0 ? 'Please Enter Content !!!' : '';
				break;
			case 'tags':
				let val = value.trim();
				newValidate.tags = val[0] !== '#' ? 'Please Enter # First Char Each Tag !!!' : '';
				break;
			default: break;
		}
		setValidPost(newValidate);
		let newPost = {
			...post,
			[name]:value
		}
		setPost(newPost);
	}
	const onAddPost = (e) =>{
		e.preventDefault();
		// form oke
		if(confirmValidate(post,validPost)){
			let tags = post.tags.trim();
			let arrTags = tags.split('#');
			arrTags.splice(0,1);
			let subtitle = post.title.trim().toLowerCase();
				let newPost = {
					owner: user._id,
					name:user.name,
					title : post.title,
					subtitle:subtitle,
					content : post.content,
					tags:arrTags,
					create_At: Date.parse(new Date())
				}

				dispatch(addPost(newPost));
				onCloseForm();
				let resetForm = {
					title:'',
					content:'',
					tags:''
				}
				setPost(resetForm);
				message.success('Add Post Successfully');
		/// form error
		}else{
				let newValidate = {};
				newValidate.title = post.title === '' ? 'Please Enter Title !!!' : '';
				newValidate.content = post.content === '' ? 'Please Enter Content !!!' : '';
				let val = post.tags;
				newValidate.tags = val[0] !== '#' || val === '' ? 'Please Enter And Enter # First Char Each Tag !!!' : '';
			let newValid = {
				...validPost,
				title: newValidate.title,
				content: newValidate.content,
				tags: newValidate.tags,
			}
			setValidPost(newValid);
		}
	}
	return(
		<form onSubmit={onAddPost}>
			<div className=''>
						<label>Title</label>
						<input type="text" className="form-control"  
							name='title'
							value={post.title}
							onChange={onChangeForm} 
						/>
						{
							validPost.title !== '' && (<span className='alert alert-danger d-block'>{validPost.title}</span>)
						}
						<label className='d-block'>Content</label>
						<textarea className="form-control"
							rows="3"
							name='content'
							value={post.content}
							onChange={onChangeForm} 
						>
						</textarea>
						{
							validPost.content !== '' && (<span className='alert alert-danger d-block'>{validPost.content}</span>)
						}
						<label>Tags</label><br />
						<input type="text" className="form-control" placeholder="#family#home...."
							onChange={onChangeForm} 
							name='tags'
							value={post.tags}
						/>
						{
							validPost.tags !== '' && (<span className='alert alert-danger d-block'>{validPost.tags}</span>)
						}
						<br />
					<div className='mt-2'>
						<button type="button" className="btn" onClick={onCloseForm}>Cancel</button>
						<button type="submit" className="btn">Save</button>
					</div>

				</div>
				</form>
		);
}

export default Form;