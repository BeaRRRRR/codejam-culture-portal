import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

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
