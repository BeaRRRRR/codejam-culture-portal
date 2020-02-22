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
import WorkItem from '../Work';
import { Work } from '../../store/types';

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

const useStyles = makeStyles({
	table: {
		minWidth: 300
	}
});

interface WorksListProps {
	works: Work[];
}

const WorksList: React.FC<WorksListProps> = (props) => {
	const classes = useStyles();

	const { works } = props;

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
						{works.map((work: Work) => (
							<WorkItem key={work.title} work={work} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default WorksList;
