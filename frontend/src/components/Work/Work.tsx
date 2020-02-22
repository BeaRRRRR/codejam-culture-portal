import React from 'react';
import { StyledTableCell, StyledTableRow } from '../Works-list';

import { Work } from '../../store/types';

import './Work.scss';

interface WorkProps {
	work: Work;
}

const Work: React.FC<WorkProps> = ({ work }) => {
	const { title, creationDate } = work;

	return (
		<StyledTableRow>
			<StyledTableCell component='th' scope='row'>
				{title}
			</StyledTableCell>
			<StyledTableCell align='right'>{`${creationDate.slice(0, 4)}`}</StyledTableCell>

		</StyledTableRow>
	);
};

export default Work;
