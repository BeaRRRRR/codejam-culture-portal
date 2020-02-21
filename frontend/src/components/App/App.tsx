import React from 'react';
import Header from '../Header';
import HomePage from '../../pages/Home';
import ArchitectPage from '../../pages/Architect';
import SearchPage from '../../pages/Search';
import Worklog from '../../pages/Worklog/index';
import NotFoundPage from '../../pages/Not-found';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
		return (
				<>
						<Container>
								<CssBaseline />
								<Router>
										<Switch>
												<Route path='/' exact render={() =>
												<>
														<Header />
														<Switch>
																<Route path='/' render={() => <HomePage />} exact />
																<Route path='/search' render={() => <SearchPage />} exact />
																<Route path='/worklog' render={() => <Worklog />} exact />
																<Route path='/architect/:id' render={() => <ArchitectPage />} />
														</Switch>
												</>
												} />
												<Route path='/' render={() => <NotFoundPage />} />
										</Switch>
								</Router>
						</Container>
				</>
		);
}

export default App;
