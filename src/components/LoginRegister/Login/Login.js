import React,{ useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import './../LoginRegister.scss';
import {loginUser} from './../../../actions/user';
import {useHistory} from 'react-router-dom';

const Login = (props) =>{
	const dispatch = useDispatch();
	const {onHideLogin} = props;
	const history = useHistory();


	// get mess from reducer user.js
	const messRegister = useSelector(state => state.user.mess);
	// state show register successfully
	const [mess,setMess] =useState('');
	useEffect(()=>{
		// set Message add user successfully 
		setMess(messRegister);
		// after 5 second hide message successfully
		setTimeout(()=>{
			setMess('');
		},5000);
	},[messRegister]);
	

	// state login user
	const [login,setLogin] = useState({
									username:'',
									password:''
								});
	// state validLogin
	const [validLogin,setValidLogin] = useState({
							username:'',
							password:''
						});


	// message return when user submit login
	let messLogin = useSelector(state => state.user.messLogin);
	// show error password failed - username failed and login success redirect to home

	let token = JSON.parse(localStorage.getItem('token'));
	useEffect(()=>{
		if(token){
			history.push('/');
		}
	},[token]);
	useEffect(()=>{
		let arr = messLogin.split(' ');
		if(messLogin && arr[0] === 'Username'){
			setValidLogin({password:'',username:messLogin});
		}else if(messLogin && arr[0] === 'Password'){
			setValidLogin({password:messLogin,username:''});
		}
	},[messLogin]);
	

	// function change form login
	const onChangeLogin = (e) =>{
		let target = e.target;
		let name = target.name;
		let value = target.value;
		let newLogin = {
			...login,
			[name]:value
		}
		setLogin(newLogin);
	}


	// function submit form login
	const onLogin = (e) =>{
		e.preventDefault();

		// when user don't enter
		let newValidateLogin = {};
		if(login.username === ''){
			newValidateLogin.username = 'Please Enter Username';
		}
		if(login.password === ''){
			newValidateLogin.password = 'Please Enter Password';
		}
		setValidLogin(newValidateLogin);

		// user enter username and password
		if(newValidateLogin.username === undefined && newValidateLogin.password === undefined){
			let newLogin = {
				username:login.username,
				password:login.password
			}
			dispatch(loginUser(newLogin));
		}
	}


	return(
		<form onSubmit={onLogin}>
			{mess !== '' && (<h1 className='register-success' >{mess}</h1>)}
			<h1>LOGIN HERE</h1>	
			<div className="form-group">
				<input type="text" className="form-control" placeholder='UserName' 
					name='username'
					value={login.username}
					onChange={onChangeLogin}
				/>
				{
					validLogin.username !== '' && (<span className='alert alert-danger'>{validLogin.username}</span>)
				}
				<input type="password" className="form-control" placeholder='PassWord' 
					name='password'
					value={login.password}
					onChange={onChangeLogin}
				/>
				{
					validLogin.password !== '' && (<span className='alert alert-danger'>{validLogin.password}</span>)
				}
			</div>
			<button type="submit" className="btn btn-primary">Login</button>
			<div className='register'><span>To Register New Account -><button type="button" className="btn btn-primary" onClick={onHideLogin}>Click Here</button></span></div>
		</form>
	);
}

export default Login;