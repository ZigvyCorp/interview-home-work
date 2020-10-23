import React,{ useState,useEffect } from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input
} from 'reactstrap';
import { Button,Popconfirm,message,Tooltip } from 'antd';
import {ROUTES} from './../../routes';
import {fetchUser} from './../../actions/user';
import {searchPost} from './../../actions/post';

// show menu
const showRoute = () =>{
	let xhtml = null;
	xhtml = ROUTES.map((route,index) =>{
		return <NavItem className="menu-item" key={index}>
					<Link to={route.path} className='menu-link'>{route.name}</Link>
				</NavItem>;
	})
	return xhtml;
}


const Header = () =>{
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	let token = JSON.parse(localStorage.getItem('token'));
	useEffect(()=>{
		if(token){
			dispatch(fetchUser());
		}
	},[token]);
	const user = useSelector(state => state.user.user);
  	const toggle = () => setIsOpen(!isOpen);
  	// search post with keyword
  	const onSearchPost = (e) =>{
  		let keyword = e.target.value;
  		dispatch(searchPost(keyword));
  	}
	
	function confirm(e) {
		message.success('Logout Successfully !!!');
		localStorage.removeItem('token');
	  	window.location = '/';
	}
	return(
		<Navbar color="light" light expand="lg" className="menu" >
			<NavbarBrand href="/" className="menu-brand">BLOGS</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar >
				<Nav navbar className="menu-nav">
					{showRoute()}
					{
						user ? <NavItem className="menu-item">
						<Tooltip placement="bottom" color='green' title='Click !!! Redirect to Your Page' style={{fontSize:'1rem',fontWeight:'bold'}}>
						<Link to='/users' className='menu-link'>Hi,{user.name}</Link>
						</Tooltip >
						<Popconfirm placement="bottom" title={`Are You Sure,${user.name}`} onConfirm={confirm} okText="Yes" cancelText="No">
							<Button type="link" className='logout'>Logout</Button>
						</Popconfirm>
					</NavItem> : <NavItem className="menu-item">
						<Link to='/login' className='menu-link'>Login</Link>
					</NavItem> 
					}
				</Nav>
				<Input type="text" name="search" placeholder="Search..." className='w-25' onChange={onSearchPost}/>
	        </Collapse>
      	</Navbar>
	);
}

export default Header;