import React from 'react';
import Header from '../Header';
import HomePage from '../../pages/Home';
import ArchitectPage from '../../pages/Architect';
import SearchPage from '../../pages/Search';
import Worklog from '../../pages/Worklog/index';
import NotFoundPage from '../../pages/Not-found';
import Team from '../../pages/Team';
import Spinner from '../Spinner';

import Container from '@material-ui/core/Container';
import ThemeProvider from '../../theme';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { LoadScript } from '@react-google-maps/api';

const GOOGLE_API_KEY = 'AIzaSyDdVGeaV2xofDELkV8F_pIf2mz7m8h1-aY';

function App() {
	return (
		<>
			<ThemeProvider>
				<Container>
					<LoadScript
						googleMapsApiKey={GOOGLE_API_KEY}
						loadingElement={ <Spinner fullscreen size={100} /> }
					>
						<Router>
							<Header />
							<Switch>
								<Route
									path='/'
									exact
									render={() => (
										<>
											<HomePage />
										</>
									)}
								/>
								<Route
									path='/search'
									exact
									render={() => (
										<>
											<SearchPage />
										</>
									)}
								/>
								<Route
									path='/worklog'
									exact
									render={() => (
										<>
											<Worklog />
										</>
									)}
								/>
								<Route
									path='/team'
									exact
									render={() => (
										<>
											<Team />
										</>
									)}
								/>
								<Route
									path='/architect/:id'
									render={() => (
										<>
											<ArchitectPage />
										</>
									)}
								/>
								<Route path='/' render={() => <NotFoundPage />} />
							</Switch>
						</Router>
					</LoadScript>
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;
