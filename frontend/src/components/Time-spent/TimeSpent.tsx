import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TimeSpentTable from '../Time-spent-table';

function TimeSpent() {
	return (
		<Box component='section' className='time-spent'>
			<Typography variant='h4' component='h2'>
				Time spent
			</Typography>
			<TimeSpentTable developer={'Minitron'} features={
				[
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
					}
				]
			} />

			<TimeSpentTable developer={'Minitron'} features={
				[
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
					}
				]
			} />
		</Box>
	);
}

export default TimeSpent;
