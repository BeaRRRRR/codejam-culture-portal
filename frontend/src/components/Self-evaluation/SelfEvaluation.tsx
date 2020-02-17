import React from 'react';
import './SelfEvaluation.scss';
import SelfEvaluationListItem from '../Self-evaluation-list-item';
import { Paper } from '@material-ui/core';

type dataScope = {
	scope: string,
	points: number,
	items: Array<dataItem>
};

type dataItem = {
	points: number,
	text: string
};

type Props = {
	data: Array<dataScope>
};

const SelfEvaluation = (props: Props) => {

	const { data } = props;

	return (
		<Paper className='self-evaluation'>
			<h2 className={'self-evaluation__heading'}>Self Evaluation</h2>
			{
				data.map((el) => {
				const { items } = el;

				return (
					<div>
						<h2 className='self-evaluation__scope'>{el.scope} - {el.points}</h2>
						{items.map((item) => (
							<SelfEvaluationListItem points={item.points} text={item.text} />
						))}
					</div>
					);
				})
			}
		</Paper>
	);
};

export default SelfEvaluation;
