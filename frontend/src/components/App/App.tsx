import * as React from 'react';
import Header from '../header';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
	return (
		<div>
			<Router history={history}>
				<Header />

				<Switch>
					<Route
						path='/'
						render={() => <h2>Main</h2>}
						exact
					/>
					<Route
						path='/search'
						render={() => <h2>Search</h2>}
						exact
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
