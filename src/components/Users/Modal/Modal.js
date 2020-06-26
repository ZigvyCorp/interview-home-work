import React,{Fragment} from 'react';
import './Modal.scss';
import {useSelector} from 'react-redux';
// <div className=''></div>


const Modal = (props) =>{
	const {onCloseForm} = props;
	const title = useSelector(state => state.post.title);
	const component = useSelector(state => state.post.component);
	return(
		<Fragment>
			<div className='box-gray' onClick={onCloseForm}></div>
			<div className='form-products'>
				<div className='title'>{title}</div>
					{component}
			</div>
		</Fragment>
		);
}

export default Modal;