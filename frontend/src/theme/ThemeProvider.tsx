import React from 'react';
import {
	ThemeProvider,
	createMuiTheme,
	Theme,
	responsiveFontSizes
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';

export interface ThemeProps {
	children: any;
	theme?: 'light' | 'dark' | undefined;
}

const ThemeProv = (props: ThemeProps) => {

	let theme: Theme = createMuiTheme({
		palette: {
			type: props.theme,
			primary: {
				light: '#efdcd5',
				main: '#bcaaa4',
				dark: '#8c7b75',
				contrastText: '#000000'
			},
			secondary: {
				light: '#ff6434',
				main: '#dd2c00',
				dark: '#a30000',
				contrastText: '#ffffff'
			}
		},
		typography: {
			fontFamily: [
				'Roboto',
				'Arial',
				'sans-serif'
			].join(','),
			fontSize: 14,
			h1: {
				fontSize: '3.5rem',
				fontWeight: 700
			},
			h2: {
				fontSize: '3rem',
				fontWeight: 500
			},
			h3: {
				fontSize: '2.6rem',
				fontWeight: 400
			}
		},
		spacing: factor => `${0.25 * factor}rem`,
		shape: {borderRadius: 10}
	});

	theme = responsiveFontSizes(theme);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{props.children}
		</ThemeProvider>
	);
};

function mapStateToProps(oldState) {
	return {
		theme: oldState.theme
	};
}

export default connect(mapStateToProps)(ThemeProv) as React.ComponentType;
