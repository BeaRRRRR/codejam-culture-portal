import React from 'react';
import YouTube from 'react-youtube';

import './Youtube.scss';

const Video = () => (
	<div className='youtube-container'>
		<YouTube
			className='youtube'
			videoId='2g811Eo7K8U'
		/>
	</div>
);

export default Video;
