import React from 'react';

import './Youtube.scss';

interface IVideoProps {
	videoUrl: string;
}

const Video: React.FC<IVideoProps> = (props) => (
	<div className='youtube-container'>
		<iframe
			src={`https://www.youtube.com/embed/${props.videoUrl}?autoplay=0&`}
		/>
	</div>
);

export default Video;
