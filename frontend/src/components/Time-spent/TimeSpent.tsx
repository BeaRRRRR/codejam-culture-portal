import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {withTranslation} from 'react-i18next';

import TimeSpentTable from '../Time-spent-table';

interface ITimeSpentProps {
		t(namespace: string): string;
}

function TimeSpent({t}: ITimeSpentProps) {
		return (
				<Box component='section' className='time-spent'>
						<Typography variant='h4' component='h2'>
								{t('timeSpent')}
						</Typography>

						<TimeSpentTable
								developer={'Alexander Fraltsov'}
								features={[
										{
												feature: 'init search component',
												timeSpent: '3h',
												startDate: '15.02',
												endDate: '15.02'
										},
										{
												feature: 'added .editorconfig',
												timeSpent: '0.25 h',
												startDate: '15.02',
												endDate: '15.02'
										},
										{
												feature: 'studing and added material-ui in project',
												timeSpent: '3h',
												startDate: '16.02',
												endDate: '16.02'
										},
										{
												feature: 'studied styleguidist docs',
												timeSpent: '5h',
												startDate: '17.02',
												endDate: '20.02'
										},
										{
												feature: 'maked first styleguidist components',
												timeSpent: '2h',
												startDate: '21.02',
												endDate: '21.02'
										},
										{
												feature: 'added styleguidist to project',
												timeSpent: '9h',
												startDate: '22.02',
												endDate: '22.02'
										},
										{
												feature: 'added some styleguidist components',
												timeSpent: '5h',
												startDate: '23.02',
												endDate: '23.02'
										},
										{
												feature: 'implemented search component',
												timeSpent: '2h',
												startDate: '23.02',
												endDate: '23.02'
										},
										{
												feature: 'added some styleguidist components',
												timeSpent: '3h',
												startDate: '24.02',
												endDate: '24.02'
										},
										{
												feature: 'fixed search component styles',
												timeSpent: '2h',
												startDate: '24.02',
												endDate: '24.02'
										}
								]}
						/>

						<TimeSpentTable
								developer={'Pavel Burya'}
								features={[
										{
												feature: 'create main page basic layout and file structure',
												timeSpent: '3h',
												startDate: '15.02',
												endDate: '15.02'
										},
										{
												feature: 'create worklog basic layout and component structure',
												timeSpent: '3h',
												startDate: '16.02',
												endDate: '16.02'
										},
										{
												feature: 'main page material ui stylization',
												timeSpent: '2h',
												startDate: '17.02',
												endDate: '17.02'
										},
										{
												feature: 'main page data loading, create 404 page',
												timeSpent: '3h',
												startDate: '20.02',
												endDate: '20.02'
										},
										{
												feature: 'scroll top button',
												timeSpent: '1h',
												startDate: '23.02',
												endDate: '23.02'
										},
										{
												feature: 'theme changer',
												timeSpent: '3h',
												startDate: '24.02',
												endDate: '24.02'
										},
										{
												feature: 'resolve styleguide and redux conflict',
												timeSpent: '2h',
												startDate: '24.02',
												endDate: '24.02'
										},
										{
												feature: 'fix typescript errors, icons, markup, stylization',
												timeSpent: '2,5h',
												startDate: '25.02',
												endDate: '26.02'
										}
								]}
						/>

						<TimeSpentTable
								developer={'Alex Andreyenkov'}
								features={[
										{
												feature: 'Participate in routing implementation',
												timeSpent: '2h',
												startDate: '15.02',
												endDate: '16.02'
										},
										{
												feature: 'Lay down the foundation for redux',
												timeSpent: '8h',
												startDate: '17.02',
												endDate: '22.02'
										},
										{
												feature: 'Implement the translation',
												timeSpent: '6h',
												startDate: '22.02',
												endDate: '26.02'
										},
										{
												feature: 'Change style of change language and change theme btns',
												timeSpent: '2h',
												startDate: '27.02',
												endDate: '27.02'
										},
										{
												feature: 'Add theme and language to session storage',
												timeSpent: '2h',
												startDate: '29.02',
												endDate: '29.02'
										}
								]}
						/>

						<TimeSpentTable
								developer={'Mikhail Kedzel'}
								features={[
										{
												feature: 'Implement basic directory structure',
												timeSpent: '2h',
												startDate: '12.02',
												endDate: '13.02'
										},
										{
												feature: 'Bug fixes',
												timeSpent: '2h',
												startDate: '15.02',
												endDate: '16.02'
										},
										{
												feature: 'Backend',
												timeSpent: '12h',
												startDate: '16.02',
												endDate: '20.02'
										},
										{
												feature: 'Connect frontend with backend',
												timeSpent: '2h',
												startDate: '20.02',
												endDate: '21.02'
										},
										{
												feature: 'Deploy the whole project to heroku',
												timeSpent: '4h',
												startDate: '21.02',
												endDate: '23.02'
										},
										{
												feature: 'More api routes in backend',
												timeSpent: '4h',
												startDate: '23.02',
												endDate: '26.02'
										},
										{
												feature: 'Reducing web bunlde size',
												timeSpent: '4h',
												startDate: '26.02',
												endDate: '27.02'
										}
								]}
						/>

						<TimeSpentTable
								developer={'Vitali Satsura'}
								features={[
										{
												feature: 'create basic-info basic layout and component structure',
												timeSpent: '2h',
												startDate: '15.02',
												endDate: '15.02'
										},
										{
												feature: 'create biography basic layout and component structure',
												timeSpent: '2h',
												startDate: '15.02',
												endDate: '15.02'
										},
										{
												feature: 'create works-list basic layout and component structure',
												timeSpent: '2h',
												startDate: '15.02',
												endDate: '15.02'
										},
										{
												feature: 'add material ui components to works-list',
												timeSpent: '3h',
												startDate: '17.02',
												endDate: '17.02'
										},
										{
												feature: 'create error indicator and add its logic to app',
												timeSpent: '3h',
												startDate: '24.02',
												endDate: '24.02'
										},
										{
												feature: 'create team page and add components there',
												timeSpent: '1h',
												startDate: '24.02',
												endDate: '24.02'
										},
										{
												feature: 'update Team page styles',
												timeSpent: '2h',
												startDate: '24.02',
												endDate: '24.02'
										},
										{
												feature: 'update Home page styles',
												timeSpent: '3h',
												startDate: '26.02',
												endDate: '26.02'
										},
										{
												feature: 'update Architect page styles',
												timeSpent: '3h',
												startDate: '26.02',
												endDate: '26.02'
										}
								]}
						/>

						<TimeSpentTable
								developer={'Vladyslav Danilochkin'}
								features={[
										{
												feature: 'Create basic header with simple navigation',
												timeSpent: '2h',
												startDate: '15.02',
												endDate: '15.02'
										},
										{
												feature: 'Add Gallery for architect page',
												timeSpent: '2h',
												startDate: '15.02',
												endDate: '15.02'
										},
										{
												feature: 'Add Youtube player for architect page',
												timeSpent: '2h',
												startDate: '15.02',
												endDate: '15.02'
										},
										{
												feature: 'Add embed Google Maps for architect page',
												timeSpent: '1h',
												startDate: '16.02',
												endDate: '16.02'
										},
										{
												feature: 'Replace header navigation with Tabs from Material UI',
												timeSpent: '1h',
												startDate: '16.02',
												endDate: '16.02'
										},
										{
												feature: 'Replace embed Maps with Google Maps API',
												timeSpent: '3h',
												startDate: '19.02',
												endDate: '19.02'
										},
										{
												feature: 'Update Redux actions and reducer',
												timeSpent: '5h',
												startDate: '22.02',
												endDate: '22.02'
										},
										{
												feature: 'Implement data display for architect\'s pages',
												timeSpent: '8h',
												startDate: '22.02',
												endDate: '25.02'
										},
										{
												feature: 'Update Gallery and Youtube components for responsiveness',
												timeSpent: '3h',
												startDate: '26.02',
												endDate: '26.02'
										},
										{
												feature: 'Implement data display for team page',
												timeSpent: '1,5h',
												startDate: '28.02',
												endDate: '28.02'
										}
								]}
						/>
				</Box>
		);
}

export default withTranslation('common')(TimeSpent);
