import React from 'react';
import {Link} from 'react-router-dom';

import './Header.scss';

const Header = () => (
	<header className='header'>
		<Link to='/'>
			<h1 className='header__heading'>Architects of Belarus</h1>
		</Link>
		<nav className='navbar'>
			<ul className='navbar__list'>
				<li className='navbar__list-item'>
					<Link to='/'>Home</Link>
				</li>
				<li className='navbar__list-item'>
					<Link to='/search'>Search</Link>
				</li>
				<li className='navbar__list-item'>
					<Link to='/worklog'>Worklog</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
