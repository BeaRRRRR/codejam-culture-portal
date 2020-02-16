import React from 'react';
import './SelfEvaluationListItem.scss';

interface SelfEvaluationListItemInterface {
	points: number;
	text: string;
}

function SelfEvaluationListItem({points, text}: SelfEvaluationListItemInterface) {

	return (
		<li className={'self-evaluation__item'}>
			<input type={'checkbox'} disabled={true} />
			<strong>{points}</strong> {text}
		</li>
	);
}

export default SelfEvaluationListItem;