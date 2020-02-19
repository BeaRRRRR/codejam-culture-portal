import React from 'react';

import './Youtube.scss';

interface IVideoProps {
	src: string;
}

const Video = (props: IVideoProps) => (
	<div className='youtube-container'>
		<iframe
			src={`https://www.youtube.com/embed/${props.src}?autoplay=1&`}
		/>
	</div>
);

export default Video;
