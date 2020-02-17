import React from 'react';
import './MainDifficulties.scss';
import DifficultyList from '../DifficultyList';

function MainDifficulties() {

	return (
		<section className={'main-difficulties'}>
			<h2 className={'main-difficulties__heading'}>Main Difficulties</h2>
			<DifficultyList difficulties={
				[
					{name: 'Problem1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore laboriosam magni nihil obcaecati pariatur voluptas! Accusantium aperiam architecto autem dicta eaque nam, officiis perspiciatis quam quidem, sint soluta ut voluptates!'},
					{name: 'Problem2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores distinctio esse et, fugit harum in incidunt inventore libero magni modi odit quod rerum sapiente sequi sunt tempore veniam vero.'},
					{name: 'Problem3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consectetur corporis deserunt dicta, dignissimos eius eligendi esse ex fuga hic inventore ipsa nam, nesciunt nobis quasi, quibusdam reprehenderit sunt.'}
				]
			}/>
		</section>
	);
}

export default MainDifficulties;
