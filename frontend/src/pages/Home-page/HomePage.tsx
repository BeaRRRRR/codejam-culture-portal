import * as React from 'react';
import Description from '../../components/Description/index';
import AuthorOfTheDay from '../../components/Author-of-the-day/index';
import DevelopersTeam from '../../components/Developers-team/index';
import './HomePage.scss';

function HomePage() {

	return (
		<div className={'home-page'}>
			<Description />
			<AuthorOfTheDay />
			<DevelopersTeam />
		</div>
	);
}

export default HomePage;