import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import View from './View/View';
import Modal from './Modal/Modal';
import {useDispatch} from 'react-redux';
import {fetchPostUser,addContentForm} from './../../actions/post';
import {useHistory} from 'react-router-dom';
import Form from './Form/Form';
import './Users.scss';
import {
  Container,
} from 'reactstrap';

const Users = () =>{
	const dispatch = useDispatch();
	const history = useHistory();
	const [showForm,setShowForm] = useState(false);
	const user = useSelector(state => state.user.user);
	const token = JSON.parse(localStorage.getItem('token'));
	useEffect(()=>{
		if(!token){
			history.push('/');
		}
	},[])
	useEffect(()=>{
		if(user){
			dispatch(fetchPostUser());
		}
	},[user]);
	// show form
	const onShowForm = () =>{
		setShowForm(true);
		// action show form Add Post
		dispatch(addContentForm(<Form onCloseForm={onCloseForm}/>,'Add Post'));
	}
	// close form
	const onCloseForm = () =>{
		setShowForm(false);
	}
	return(
		<Container>
			<Header />
			<div className='p-3 text-right box-add my-5'>
				<div className='btn btn-warning text-white font-weight-bold' onClick={onShowForm}>Add Product +</div>
			</div>
				{
					showForm ? <Modal onCloseForm={onCloseForm} /> : ''
				}
				<View />
			<Footer />
		</Container>
	);
}

export default Users;