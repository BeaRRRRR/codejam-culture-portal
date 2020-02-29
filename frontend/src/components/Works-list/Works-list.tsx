import React from 'react';
import {
	withStyles,
	Theme,
	createStyles,
	makeStyles
} from '@material-ui/core/styles';

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Typography,
	Box
} from '@material-ui/core';

import WorkItem from '../Work';
import { Work } from '../../store/types';

import './Works-list.scss';

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
	t: (namespace: string) => string;
}

const WorksList: React.FC<WorksListProps> = (props) => {
	const classes = useStyles();

	const { works, t } = props;

	return (
		<Box className='works-list' component='section'>
			<Typography
				className='works-list__heading'
				variant='h3' component='h2'
				gutterBottom
			>
				{t('worksList.masterpiece')}
			</Typography>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>{t('worksList.work')}</StyledTableCell>
							<StyledTableCell align='right'>
								{t('worksList.creationDate')}
							</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{works.map((work: Work) => (
							<WorkItem key={work.title} work={work} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default WorksList;
