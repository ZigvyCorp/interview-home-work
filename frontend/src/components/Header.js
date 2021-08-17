import React from 'react';
import { Link } from 'react-router-dom';

import InputSearch from '../components/InputSearch';
import Logo from '../images/zigvy-1325036032.jpg';
import { Profile } from './Profile';

const Header = () => {
	return (
		<div className='header'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light position-sticky'>
				<div className='container-fluid'>
					<Link
						className='navbar-brand'
						to='/'
						onClick={() => window.scrollTo({ top: 0 })}
					>
						<img
							style={{ width: '50px', height: '50px', borderRadius: '50%' }}
							src={Logo}
							alt='Logo'
						/>
						<span> &nbsp;Zigvy </span>
					</Link>

					<InputSearch />
					<Profile />
				</div>
			</nav>
		</div>
	);
};

export default Header;
