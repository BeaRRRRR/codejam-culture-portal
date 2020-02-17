import React from 'react';
import Header from '../Header';
import HomePage from '../../pages/Home';
import ArchitectPage from '../../pages/Architect-page';
import SearchPage from '../../pages/Search-page';
import Worklog from '../../pages/Worklog/index';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<>
			<Container >
				<CssBaseline />
				<Router>
					<Header />
					<Switch>
						<Route path='/' render={() => <HomePage />} exact />
						<Route path='/search' render={() => <SearchPage />} exact />
						<Route path='/worklog' render={() => <Worklog />} exact />
						<Route path='/architect/:id' render={() => <ArchitectPage />} />
					</Switch>
				</Router>
			</Container>
		</>
	);
}

export default App;
