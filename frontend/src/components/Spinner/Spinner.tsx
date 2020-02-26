import React from 'react';
import Progress from '../../styled-components/loading/progress';
import Box from '@material-ui/core/Box';

import './Spinner.scss';

interface SpinnerProps {
	fullscreen?: boolean;
	size: number;
}

const Spinner: React.FC<SpinnerProps> = ({ fullscreen, size }) => {
	return (
		<Box
			className='spinner-container'
			height={ fullscreen ? '100vh' : '100%' }
		>
			<Progress type='circular' color='secondary' size={size} />
		</Box>
	);
};

export default Spinner;
