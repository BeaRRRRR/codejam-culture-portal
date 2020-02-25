import React from 'react';
import Box from '@material-ui/core/Box';

import './Youtube.scss';

interface IVideoProps {
	videoUrl: string;
}

const Video: React.FC<IVideoProps> = (props) => (
	<Box className='youtube-container'>
		<iframe
			src={`https://www.youtube.com/embed/${props.videoUrl}?autoplay=0&`}
		/>
	</Box>
);

export default Video;
