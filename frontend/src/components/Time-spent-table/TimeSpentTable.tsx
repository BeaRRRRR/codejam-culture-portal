import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
	return (
		<TableContainer className='time-spent__container' component={Paper}>
			<Table className='time-spent__table' size='small' aria-label='a dense table'>
				<caption>{developer}</caption>
				<TableHead>
					<TableRow>
						<TableCell>Feature</TableCell>
						<TableCell align='right'>Time spent</TableCell>
						<TableCell align='right'>Start date</TableCell>
						<TableCell align='right'>End date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{features.map((row) => (
						<TableRow key={row.feature}>
							<TableCell component='th' scope='row'>
								{row.feature}
							</TableCell>
							<TableCell align='right'>{row.timeSpent}</TableCell>
							<TableCell align='right'>{row.startDate}</TableCell>
							<TableCell align='right'>{row.endDate}</TableCell>
							</TableRow>
							))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default TimeSpentTable;
