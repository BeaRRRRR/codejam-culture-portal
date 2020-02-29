import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
	* Progress properties.
	*/

export interface ProgressProps {
	/** Default: linear */
	type?: 'circular'|'linear';
	size?: number;
	color?: 'primary'|'secondary';
	/** Only indeterminate for circular type */
	variant?: 'indeterminate'|'query';
}

/**
	* @component
	*/

class Progress extends Component <ProgressProps, {}> {
	render () {
		const {color, variant, type, size} = this.props;
		return (type === 'circular') ? (<CircularProgress color={color} variant={'indeterminate'} size={size}/>
			) : (
				<LinearProgress color={color} variant={variant}/>);
	}
}

export default Progress;
