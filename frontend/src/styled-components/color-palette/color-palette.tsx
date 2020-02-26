import React, { FunctionComponent } from 'react';
import { Box, Grid } from '@material-ui/core';

/**
	* @component
	* @visibleName
	*/

const ColorPalette: FunctionComponent = () => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='primary.light' color='primary.contrastText' p={2}>
					primary.light
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='primary.main' color='primary.contrastText' p={2}>
					primary.main
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='primary.dark' color='primary.contrastText' p={2}>
					primary.dark
			</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='secondary.light' color='secondary.contrastText' p={2}>
					secondary.light
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='secondary.main' color='secondary.contrastText' p={2}>
					secondary.main
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='secondary.dark' color='secondary.contrastText' p={2}>
					secondary.dark
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='error.main' color='error.contrastText' p={2}>
					error.main
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='warning.main' color='warning.contrastText' p={2}>
					warning.main
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='info.main' color='info.contrastText' p={2}>
					info.main
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='text.primary' color='background.paper' p={2}>
					text.primary
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='text.secondary' color='background.paper' p={2}>
					text.secondary
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box bgcolor='text.disabled' color='background.paper' p={2}>
					text.disabled
				</Box>
			</Grid>
		</Grid>
	);
};

export default ColorPalette;
