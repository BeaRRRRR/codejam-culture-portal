import React from 'react';

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
		<div className='basic-info'>
			<img
				src={pictureUrl}
				alt='author image'
				className='basic-info__image' />
			<h2 className='basic-info__title'>{name}</h2>
			<p className='basic-info__life' >{lifeYears}</p>
			<p className='basic-info__life' >{birthPlace}</p>
			<p className='basic-info__description'>{summary}</p>
		</div>
	);
};

export default BasicInfo;
