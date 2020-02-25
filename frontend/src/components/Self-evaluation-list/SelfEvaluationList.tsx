import React from 'react';
import SelfEvaluationListItem from '../Self-evaluation-list-item';

import List from '@material-ui/core/List';

type Item = {
	points: number,
	text: string,
	done: boolean
};

type Props = {
	items: Array<Item>
};

const SelfEvaluationList = (props: Props) => {
	const { items } = props;
	return (
		<List>
			{items.map((item) => (
				<SelfEvaluationListItem
					points={item.points}
					text={item.text}
					done={item.done}
					key={item.text}
				/>
			))}
		</List>
	);
};

export default SelfEvaluationList;
