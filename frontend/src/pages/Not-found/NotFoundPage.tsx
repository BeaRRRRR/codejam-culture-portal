import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

function NotFoundPage() {
	return (
		<div className={'not-found-page'}>
			<h1>ERROR 404: Page not found</h1>
			<h2>This page does not exist(</h2>
			<Link to='/' >
				<h2>Go to home page</h2>
			</Link>
		</div>
	);
}

export default NotFoundPage;
