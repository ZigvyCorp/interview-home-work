import React,{ useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './../LoginRegister.scss';
import {addUser} from './../../../actions/user';

//Check validate when submit form register
const confirmValidate = (user,validate) =>{
	let valid = true;
	
	// Check state validRegister
	Object.values(validate).forEach(val =>{
		val.length > 0 && (valid = false);
	});

	// Check state User
	if(user.username === ''){valid = false};
	if(user.password === ''){valid = false};
	if(user.confirm === '' || user.confirm !== user.password){valid=false};

	return valid;
}

const Register = (props) =>{
	const {onShowLogin} = props;
	const dispatch = useDispatch();
	// get mess from reducer user.js
	const messRegister = useSelector(state => state.user.mess);
	// when submit form register backend return mess, if username exist - reutrn Username Exists !!!
	useEffect(()=>{
		// username exist
		if(messRegister === 'Username Exists !!!'){
			// validate username 'Username Exists !!!'
			let newValid ={
				...validRegister,
				username:messRegister
			}
			// set state validRegister
			setValidRegister(newValid);
		// addUsers successfully
		}else if(messRegister === 'Resgister Successfully !!!'){
		//back login
			onShowLogin();
			let resetForm = {
				name:'',
				username:'',
				password:'',
				confirm:'',
				dob: new Date()
			}
			setUser(resetForm);
		}
	},[messRegister]);
	// state information user
	const [user,setUser] = useState({
									name:'',
									username:'',
									password:'',
									confirm:'',
									dob:new Date()
								});
	// state validate form register
	const [validRegister,setValidRegister] = useState({
							name:'',
							username:'',
							password:'',
							confirm:''
						});

	// onChange form register and validate
	const onChangeRegister= (e) =>{
		let target = e.target;
		let name = target.name;
		let value = target.value;
		let validate = validRegister;
		switch(name){
			case 'name':
				validate.name = value.length === 0 ? 'Please Enter Name !!!' : '';
				break;
			case 'username':
				validate.username = value.length <= 5 ? 'Please Enter UserName & minimum 6 char !!!' : '';
				break;
			case 'password':
				validate.password = value.length <= 5 ? 'Please Enter PassWord & minimum 6 char !!!' : '';
				break;
			case 'confirm':
				validate.confirm = value !== user.password ? 'Password Confirm Failed - Please Enter Again !!!' : '';
				break;
			default: break;
		}
		setValidRegister(validate);
		let newUser = {
			...user,
			[name]:value
		}
		setUser(newUser);
	}

	// submit form register
	const onRegister = (e) =>{
		e.preventDefault();
		// check function confirmValidate return true , dispath action
		if(confirmValidate(user,validRegister)){
			let newUser = {
				name:user.name,
				username:user.username,
				password:user.password,
				dob: Date.parse(user.dob),
				create_At: Date.parse(new Date())
			}
			dispatch(addUser(newUser));
		}else{ // if function confirmValidate return false - show validate and return
			let newValidate = {};
				newValidate.username = user.username === '' ? 'Please Enter Username !!!' : '';
				newValidate.password = user.password === '' ? 'Please Enter Password !!!' : '';
				newValidate.confirm = user.confirm === '' ? 'Please Enter Confirm Password !!!' : '';
			let newValid = {
				...validRegister,
				username: newValidate.username,
				password: newValidate.password,
				confirm: newValidate.confirm,
			}
			setValidRegister(newValid);
		}
	}

	return(
		<form onSubmit={onRegister}>
			<h1>REGISTER HERE</h1>	
			<div className="form-group">
				<div className="row">
					<div className="col-12">
						<input type="text" className="form-control" placeholder='FullName' 
							name='name'
							onChange={onChangeRegister}
							value={user.name}
						/>
						{
							validRegister.name.length > 0 && (<span className='alert alert-danger'>{validRegister.name}</span>)
						}
						<input type="text" className="form-control" placeholder='UserName' 
							name='username'
							onChange={onChangeRegister}
							value={user.username}
						/>
						{
							validRegister.username.length > 0 && (<span className='alert alert-danger'>{validRegister.username}</span>)
						}
						<input type="password" className="form-control" placeholder='PassWord' 
							name='password'
							onChange={onChangeRegister}
							value={user.password}
						/>
						{
							validRegister.password.length > 0 && (<span className='alert alert-danger'>{validRegister.password}</span>)
						}
						<input type="password" className="form-control" placeholder='Confirm PassWord' 
							name='confirm'
							onChange={onChangeRegister}
							value={user.confirm}
						/>
						{
							validRegister.confirm.length > 0 && (<span className='alert alert-danger'>{validRegister.confirm}</span>)
						}
						<input type="date" className="form-control" placeholder='BirthDay'
							onChange={onChangeRegister}
							name='dob'
							value={user.dob}
						/>
					</div>
				</div>
			</div>
			<button type="submit" className="btn btn-success">Register</button>
			<div className='register mt-5 font-weight-bold'><span>Login -><button type="button" className="btn btn-primary" onClick={onShowLogin}>Click Here</button></span></div>
		</form>
	);
}

export default Register;