import * as React from 'react';
import Header from '../Header';
import Youtube from '../Youtube';
import BasicInfo from '../Basic-info';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<Header />

				<Switch>
					<Route
						path='/'
						render={() => <h2>Main</h2>}
						exact
					/>
					<Route
						path='/search'
						render={() => <Youtube />}
						exact
					/>
				</Switch>
				<BasicInfo />
			</Router>
		</div>
	);
}

export default App;
