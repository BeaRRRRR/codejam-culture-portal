import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withTranslation } from 'react-i18next';

import TimeSpentTable from '../Time-spent-table';

interface ITimeSpentProps {
	t(namespace: string): string;
}

function TimeSpent({ t }: ITimeSpentProps) {
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
					},
					{
						feature: 'worklog, presentation',
						timeSpent: '0h',
						startDate: '26.02',
						endDate: '27.02'
					}
				]}
			/>
		</Box>
	);
}

export default withTranslation('common')(TimeSpent);
