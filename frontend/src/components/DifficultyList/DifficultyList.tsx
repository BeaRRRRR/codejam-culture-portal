import React from 'react';
import './DifficultyList.scss';
import { List, ListItem, ListItemText, Collapse, Paper } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

interface DifficultyListInterface {
	difficulties: {
		name: string;
		description: string;
	}[];
}

function DifficultyList({difficulties}: DifficultyListInterface) {
	return (
		<Paper className='difficulty-list'>
			<List
					component='div'
					aria-labelledby='nested-list'
			>
				{difficulties.map((el) => {
					const [open, setOpen] = React.useState(false);

					const handleClick = () => {
						setOpen(!open);
					};

					return (
						<div key={el.name}>
							<ListItem button onClick={handleClick}>
								<ListItemText primary={el.name} />
								{open ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={open} timeout='auto' unmountOnExit>
								<List component='div' disablePadding>
									<ListItem>
										<ListItemText primary={el.description} />
									</ListItem>
								</List>
						</Collapse>
						</div>
					);
				})}
			</List>
		</Paper>
	);
}

export default DifficultyList;
