import React from 'react';
import SelfEvaluationListItem from '../Self-evaluation-list-item';

import './SelfEvaluationList.scss';

type Item = {
	points: number,
	text: string
};

type Props = {
	items: Array<Item>
};

const SelfEvaluationList = (props: Props) => {
	const { items } = props;
	return (
		<ul className='list'>
			{items.map((item) => (
				<SelfEvaluationListItem points={item.points} text={item.text} key={item.text} />
			))}
		</ul>
	);
};

export default SelfEvaluationList;
