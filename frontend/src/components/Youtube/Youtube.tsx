import React, { HTMLProps } from 'react';

import './Youtube.scss';

const Video = (props: HTMLProps<HTMLIFrameElement>) => (
	<div className='youtube-container'>
		<iframe
			src={`https://www.youtube.com/embed/${props.src}?autoplay=1&`}
		/>
	</div>
);

export default Video;
