import React from 'react';

import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Checkbox
} from '@material-ui/core';
interface SelfEvaluationListItemInterface {
	points: number;
	text: string;
	done: boolean;
}

function SelfEvaluationListItem({points, text, done}: SelfEvaluationListItemInterface) {

	const itemLabel = `${text} – ${points}`;

	return (
		<ListItem>
			<ListItemIcon>
				<Checkbox
					edge='start'
					checked={done}
					tabIndex={-1}
					disabled
				/>
			</ListItemIcon>
			<ListItemText primary={itemLabel} />
		</ListItem>
	);
}

export default SelfEvaluationListItem;
