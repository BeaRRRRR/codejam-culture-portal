import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import { switchTheme } from '../../actions';

import './ThemeChange.scss';

interface ThemeChangeInterface {
	display?: string;
	t?: any;
	theme?: string;
}

function ThemeChange({ display, theme }: ThemeChangeInterface) {
	let buttonNames = ['light', 'dark'];

	function handleClick(_e: MouseEvent<HTMLElement>, newTheme: string) {
		if (newTheme !== theme && newTheme !== null) {
			switchTheme(newTheme);
			sessionStorage.setItem('theme', newTheme);
		}
	}

	let buttons: JSX.Element[] = buttonNames.map(buttonName => {
		return (
			<ToggleButton value={buttonName} key={buttonName}>
				{buttonName === 'light' ? <WbSunnyIcon /> : <Brightness3Icon />}
			</ToggleButton>
		);
	});

	let buttonGroupClasses = 'theme-change-button-group';
	if (display === 'bottom') buttonGroupClasses += ' bottom';
	else buttonGroupClasses += ' top';

	return (
		<ToggleButtonGroup
			value={theme}
			exclusive
			onChange={handleClick}
			className={buttonGroupClasses}
		>
			{buttons}
		</ToggleButtonGroup>
	);
}

function mapStateToProps(oldState) {
	return {
		theme: oldState.theme
	};
}

export default connect(mapStateToProps)(ThemeChange);
