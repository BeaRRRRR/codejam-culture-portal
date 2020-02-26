import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import { ArrowUpward, HomeRounded, WbSunny, Brightness3, Star } from '@material-ui/icons';

/**
	* @component
	* @visibleName
	*/

const Icons: FunctionComponent = () => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={1} sm={1}>
				<ArrowUpward/>
			</Grid>
			<Grid item xs={1} sm={1}>
				<HomeRounded/>
			</Grid>
			<Grid item xs={1} sm={1}>
				<WbSunny/>
			</Grid>
			<Grid item xs={1} sm={1}>
				<Brightness3/>
			</Grid>
			<Grid item xs={1} sm={1}>
				<Star/>
			</Grid>
		</Grid>
	);
};

export default Icons;
