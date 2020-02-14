import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<Link to='/' >
			<h1>Architects of Belarus</h1>
		</Link>
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/search'>Search</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
