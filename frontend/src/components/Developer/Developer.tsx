import * as React from 'react';
import './Developer.scss';

interface DeveloperInterface {
	devName: string;
}

function Developer({devName}: DeveloperInterface) {

	return (
		<>
			<div className={'Developer'}>{devName}</div>
		</>
	);
}

export default Developer;