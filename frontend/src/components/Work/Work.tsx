import React from 'react';
import { StyledTableCell, StyledTableRow } from '../Works-list';

import './Work.scss';


interface WorkProps {
  row: {
    work: string,
    dateOfCreation: string
  }
}

const Work: React.FC<WorkProps> = ({ row }) => {
  const { work, dateOfCreation } = row;

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {work}
      </StyledTableCell>
      <StyledTableCell align="right">{dateOfCreation}</StyledTableCell>

    </StyledTableRow>
  );
}

export default Work;