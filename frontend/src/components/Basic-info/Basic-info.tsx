import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import './Basic-info.scss';

interface BasicInfoProps {
	pictureUrl: string;
	name: string;
	summary: string;
	birthPlace: string;
	birthDate: string;
	deathDate: string;
	t: (namespace: string) => string;
}

const BasicInfo: React.FC<BasicInfoProps> = (props) => {
	const {
		name,
		pictureUrl,
		summary,
		birthPlace,
		birthDate,
		deathDate,
		t
	} = props;

	const lifeYears = `(${birthDate.slice(0, 4)} - ${deathDate.slice(0, 4)})`;

	return (
		<Box className='basic-info' component='section'>
			<Typography
				className={'basic-info__heading'}
				variant='h3'
				component='h2'
				gutterBottom
			>
				{t('basicInfo.header').toUpperCase()}
			</Typography>
			<Paper className={'basic-info__paper'}>
				<img
					src={pictureUrl}
					alt='author image'
					className='basic-info__image' />
				<Typography variant='h4' component='h2'>
					{name}
				</Typography>
				<Typography variant='subtitle2'>
					{lifeYears}
				</Typography>
				<Typography variant='subtitle1'>
					{birthPlace}
				</Typography>
				<Typography variant='subtitle1' className='basic-info__description'>
					{summary}
				</Typography>
			</Paper>
		</Box>
	);
};

export default BasicInfo;
