import React from 'react';
import Box from '@material-ui/core/Box';

import Description from '../../components/Description';
import AuthorOfTheDay from '../../components/Author-of-the-day';

import './HomePage.scss';

function HomePage() {
	return (
		<Box className='home-page'>
			<Description />
			<AuthorOfTheDay />
		</Box>
	);
}

export default HomePage;
