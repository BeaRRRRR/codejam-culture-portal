import React from 'react';
import { Box, Typography, Paper } from '@material-ui/core';

import SelfEvaluationList from '../Self-evaluation-list';

import './SelfEvaluation.scss';

type dataScope = {
	scope: string;
	points: number;
	items: Array<dataItem>;
};

type dataItem = {
	points: number;
	text: string;
	done: boolean;
};

type Props = {
	data: Array<dataScope>;
	t: (namespace: string) => string;
};

const SelfEvaluation = (props: Props) => {
	const { data, t } = props;

	return (
		<Box className='self-evaluation' component='section'>
			<Typography variant='h4' component='h2' gutterBottom>
				{t('selfEvaluation')}
			</Typography>
			<Paper className='self-evaluation__paper'>
				{data.map((el, i) => {
					const { items } = el;

					return (
						<Box key={i}>
							<Typography variant='h5' component='h3'>
								{el.scope} - {el.points}
							</Typography>
							<SelfEvaluationList items={items} />
						</Box>
					);
				})}
					<Typography variant='h5' component='h3'>
							{t('total') + ': 50 + 140 + 170 = 230'}
					</Typography>
			</Paper>
		</Box>
	);
};

export default SelfEvaluation;
