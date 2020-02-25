import React from 'react';
import SelfEvaluationList from '../Self-evaluation-list';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './SelfEvaluation.scss';

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
		<Box className='self-evaluation' component='section'>
			<Typography variant='h4' component='h2'>
				Self Evaluation
			</Typography>
			<Paper className='self-evaluation__paper'>
				{
					data.map((el, i) => {
						const { items } = el;

						return (
							<Box key={i}>
								<Typography variant='h5' component='h3'>
									{el.scope} - {el.points}
								</Typography>
								<SelfEvaluationList items={items} />
							</Box>
						);
					})
				}
			</Paper>
		</Box>
	);
};

export default SelfEvaluation;
