import React,{ useState } from 'react';
import classNames from 'classnames';
import './LoginRegister.scss';
import Register from './Register/Register';
import Login from './Login/Login';

const LoginRegister = () =>{
	
	// state hide,show form login and form register
	const [show,setShow] = useState(true);
	// state show === false , hide form login , and vice versa
	let changeFormLogin = classNames({'hide-form-login':show===false,'show-form-login-delay':show===true});
	// state show === false , show form register , and vice versa
	let changeFormRegister = classNames({'show-form-register':show===false,'':show===true});


	// hide form login and show form register
	const onHideLogin = () =>{
		setShow(false);
	}

	// show form login and hide form register
	const onShowLogin = () =>{
		setShow(true);
	}
	return(
		<div className='bg-login'>
			<div className={`form-login ${changeFormLogin}`}>
				<Login onHideLogin={onHideLogin} />
			</div>
			<div className={`form-login form-register ${changeFormRegister}`}>
				<Register onShowLogin={onShowLogin}/>
			</div>
		</div>
	);
}

export default LoginRegister;