import React from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography
} from '@material-ui/core';

import './Developer.scss';

interface DeveloperProps {
		name: string;
		linkToImage?: string;
		linkToGithub: string;
		contribution: string;
}

const Developer: React.FC<DeveloperProps> = (props) => {
	const {
		name,
		linkToImage,
		linkToGithub,
		contribution
	} = props;

	return (
		<>
			<Card className='developers-team__item'>
				<CardMedia
					className='developers-team__image'
					image={linkToImage}
					title={name}
					component='img'
				/>
				<CardContent>
					<Typography
						variant='h5'
						component='h3'
						className='developers-team__name'
					>
						{name}
					</Typography>
					<Typography
						variant='body2'
						component='p'
						className='developers-team__contribution'
					>
						{contribution}
					</Typography>
				</CardContent>
				<CardActions>
					<a
						className='developers-team__link'
						href={linkToGithub}
					>
						<Button size='small'>Github</Button>
					</a>
				</CardActions>
			</Card>
		</>
	);
};

export default Developer;
