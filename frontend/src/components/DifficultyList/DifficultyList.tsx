import React from 'react';
import './DifficultyList.scss';

interface DifficultyListInterface {
	difficulties: {
		name: string;
		description: string;
	}[];
}

function DifficultyList({difficulties}: DifficultyListInterface) {

	let listItems = [];
	for (let i = 0; i < difficulties.length; i++) {
		listItems.push(
			<li key={i} className={'main-difficulties__item'}>
				<div className={'main-difficulties__name'}>
					{difficulties[i].name}
				</div>
				<div className={'main-difficulties__description'}>
					{difficulties[i].description}
				</div>
			</li>
		);
	}

	return (
		<ul className={'main-difficulties__list'}>
			{listItems}
		</ul>
	);
}

export default DifficultyList;