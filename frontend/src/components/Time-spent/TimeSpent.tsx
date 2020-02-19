import React from 'react';
import './TimeSpent.scss';
import TimeSpentTable from '../Time-spent-table';

function TimeSpent() {

	return (
		<section className={'time-spent'}>
			<h2 className={'time-spent__heading'}>Time spent</h2>
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
		</section>
	);
}

export default TimeSpent;