import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './Works-list.scss';
import Work from '../Work';

export const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white
		},
		body: {
			fontSize: 14
		}
	})
)(TableCell);

export const StyledTableRow = withStyles((theme: Theme) =>
	createStyles({
		root: {
			'&:nth-of-type(odd)': {
				backgroundColor: theme.palette.background.default
			}
		}
	})
)(TableRow);

let maxID = 0;

function createData(id: number, work: string, dateOfCreation: string) {
	return { id, work, dateOfCreation };
}

const rows = [
	createData(maxID++, 'Национальный художественный музей Республики Беларусь', '-'),
	createData(maxID++, 'Национальный академический драматический театр им. М. Горького (реконструкция)', '1948—1950'),
	createData(maxID++, 'Здание Минского областного статистического управления', '1954'),
	createData(maxID++, 'Национальный художественный музей Республики Беларусь', '1954 - 1957'),
	createData(maxID++, 'Учебные корпуса медицинского института', '1966')
];

const useStyles = makeStyles({
	table: {
		minWidth: 300
	}
});

const WorksList: React.FC = () => {
	const classes = useStyles();

	return (
		<div className='works-list'>
			<h2 className='works-list__title'>Шедевры</h2>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>Произведение</StyledTableCell>
							<StyledTableCell align='right'>Дата создания</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<Work key={row.id} row={row} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default WorksList;
