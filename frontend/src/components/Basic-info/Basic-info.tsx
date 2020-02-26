import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import './Basic-info.scss';

interface BasicInfoProps {
	pictureUrl: string;
	name: string;
	summary: string;
	birthPlace: string;
	birthDate: string;
	deathDate: string;
}

const BasicInfo: React.FC<BasicInfoProps> = (props) => {
	const { name, pictureUrl, summary, birthPlace, birthDate, deathDate } = props;

	const lifeYears = `(${birthDate.slice(0, 4)} - ${deathDate.slice(0, 4)})`;

	return (
		<Box className='basic-info'>
			<img
				src={pictureUrl}
				alt='author image'
				className='basic-info__image' />
			<Typography variant='h4' component='h2' align={'center'}>
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
		</Box>
	);
};

export default BasicInfo;
