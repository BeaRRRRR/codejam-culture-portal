import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import { ArrowUpward, HomeRounded, WbSunny, Brightness3, Star } from '@material-ui/icons';

/**
	* @component
	* @visibleName
	*/

const Icons: FunctionComponent = () => {
	return (
		<Grid container justify='center' spacing={3}>
			<Grid item xs={2} sm={2}>
				<ArrowUpward/>
			</Grid>
			<Grid item xs={2} sm={2}>
				<HomeRounded/>
			</Grid>
			<Grid item xs={2} sm={2}>
				<WbSunny/>
			</Grid>
			<Grid item xs={2} sm={2}>
				<Brightness3/>
			</Grid>
			<Grid item xs={2} sm={2}>
				<Star/>
			</Grid>
		</Grid>
	);
};

export default Icons;
