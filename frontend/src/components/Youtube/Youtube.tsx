import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import './Youtube.scss';

interface IVideoProps {
	videoUrl: string;
}

const Video: React.FC<IVideoProps> = (props) => (
	<Box className='youtube' component='section'>
		<Typography className={'youtube__heading'} variant='h3' component='h2' gutterBottom>Youtube</Typography>
		<Paper className={'youtube__paper'}>
			<iframe
				src={`https://www.youtube.com/embed/${props.videoUrl}?autoplay=0&`}
			/>
		</Paper>
	</Box>
);

export default Video;
