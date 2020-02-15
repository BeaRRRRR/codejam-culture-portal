import * as React from 'react';
import './AuthorOfTheDay.scss';

function AuthorOfTheDay() {

	return (
		<section className={'author-of-the-day'}>
			<h2 className={'author-of-the-day__heading'}>AuthorOfTheDay</h2>
			<div className={'author-of-the-day__content'}>AuthorInfo</div>
		</section>
	);
}

export default AuthorOfTheDay;