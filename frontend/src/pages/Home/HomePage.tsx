import React from 'react';

import Description from '../../components/Description';
import AuthorOfTheDay from '../../components/Author-of-the-day';

import './HomePage.scss';

function HomePage() {
	return (
		<div className={'home-page'}>
			<Description />
			<AuthorOfTheDay />
		</div>
	);
}

export default HomePage;
