import React from 'react';
import './TimeSpentTable.scss';

interface TimeSpentTableInterface {
	developer: string;
	features: {
		feature: string;
		timeSpent: string;
		startDate: string;
		endDate: string;
	}[];

}

function TimeSpentTable({developer, features}: TimeSpentTableInterface) {

	function renderFeatures() {
		let rows = [];
		for (let i = 0; i < features.length; i++) {
			rows.push(
				<tr key={i}>
					<td>{features[i].feature}</td>
					<td>{features[i].timeSpent}</td>
					<td>{features[i].startDate}</td>
					<td>{features[i].endDate}</td>
				</tr>
			);
		}
		return rows;
	}

	return (
		<table className={'time-spent__table'}>
			<caption>{developer}</caption>
			<tbody>
			<tr>
				<th>Feature</th>
				<th>Time spent</th>
				<th>Start date</th>
				<th>End date</th>
			</tr>
			{renderFeatures()}
			</tbody>
		</table>
	);
}

export default TimeSpentTable;