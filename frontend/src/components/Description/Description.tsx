import React from 'react';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import './Description.scss';

interface IDescriptionProps {
	t: (namespace: string) => string;
}

function Description({ t }: IDescriptionProps) {
	return (
		<Box className={'description'} component='section' my={[3, 6, 8, 10]}>
			<Typography
				className='description__heading'
				variant='h3'
				component='h2'
				align='center'
				gutterBottom
			>
				{t('description.header').toUpperCase()}
			</Typography>
			<Paper className={'description__paper'}>
				<Typography
					className={'description__text'}
					variant='body1'
					component='p'
				>
					{t('description.p1')}
				</Typography>
				<Typography
					className={'description__text'}
					variant='body1'
					component='p'
				>
					{t('description.p2')}
				</Typography>
				<Typography
					className={'description__text'}
					variant='body1'
					component='p'
				>
					{t('description.p3')}
				</Typography>
			</Paper>
		</Box>
	);
}

export default withTranslation('common')(Description);
