import React from 'react';
import './SelfEvaluation.scss';
import SelfEvaluationList from '../Self-evaluation-list';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

type dataScope = {
	scope: string,
	points: number,
	items: Array<dataItem>
};

type dataItem = {
	points: number,
	text: string,
	done: boolean
};

type Props = {
	data: Array<dataScope>
};

const SelfEvaluation = (props: Props) => {

	const { data } = props;

	return (
		<section className='self-evaluation'>
			<Typography variant='h3' component='h2'>
				Self Evaluation
			</Typography>
			<Paper className='self-evaluation__paper'>
				{
					data.map((el, i) => {
						const { items } = el;

						return (
							<Box key={i}>
								<Typography variant='h4' component='h3'>
									{el.scope} - {el.points}
								</Typography>
								<SelfEvaluationList items={items} />
							</Box>
						);
					})
				}
			</Paper>
		</section>
	);
};

export default SelfEvaluation;
