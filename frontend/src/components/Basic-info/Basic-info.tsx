import React from 'react';

import './Basic-info.scss';

interface BasicInfoProps {
	pictureUrl: string;
	name: string;
	summary: string;
}

const BasicInfo: React.FC<BasicInfoProps> = (props) => {
	const { name, pictureUrl, summary } = props;

	return (
		<div className='basic-info'>
			<img
				src={pictureUrl}
				alt='author image'
				className='basic-info__image' />
			<h2 className='basic-info__title'>{name}</h2>
			<p className='basic-info__life' >(1893 — 1968)</p>
			<p className='basic-info__description'>{summary}</p>
		</div>
	);
};

export default BasicInfo;
