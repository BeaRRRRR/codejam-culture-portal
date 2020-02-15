import * as React from 'react';
import './Developer.scss';

interface DeveloperInterface {
	devName: string;
}

function Developer({devName}: DeveloperInterface) {

	return (
		<>
			<div className={'developers-team__developer'}>{devName}</div>
		</>
	);
}

export default Developer;