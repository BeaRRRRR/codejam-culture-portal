import React from 'react';

interface SelfEvaluationListItemInterface {
	points: number;
	text: string;
}

function SelfEvaluationListItem({points, text}: SelfEvaluationListItemInterface) {

	return (
		<li>
			<input type={'checkbox'} disabled={true} />
			<strong>{points}</strong> {text}
		</li>
	);
}

export default SelfEvaluationListItem;
