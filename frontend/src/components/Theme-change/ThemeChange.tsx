import React, { MouseEvent } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { switchTheme } from '../../actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import './ThemeChange.scss';

const useStyles = makeStyles(() =>
	createStyles({
		active: {
			background: 'red',
			color: 'black'
		}
	})
);

interface ThemeChangeInterface {
		display?: string;
		t?: any;
		theme?: string;
}

function ThemeChange({t, display, theme}: ThemeChangeInterface) {
	const classes = useStyles();
	let buttonNames = ['light', 'dark'];
	let buttonText = [t('themeChange.light'), t('themeChange.dark')];
	let buttons: JSX.Element[] = [];

	function handleClick(e: MouseEvent<HTMLButtonElement>) {
		const selectedTheme: string = e.currentTarget.value;
		if (selectedTheme !== theme) {
			switchTheme(selectedTheme);
		}
	}

	buttonNames.map((buttonName, i) => {
		buttons.push(
			<Button
				onClick={handleClick}
				value={buttonName}
				key={buttonName}
				className={buttonName === theme ? classes.active : ''}
			>
				{buttonText[i]}
			</Button>
		);
	});

	let buttonGroupClasses = 'theme-change-button-group';
	if (display === 'bottom') buttonGroupClasses += ' bottom';
	else buttonGroupClasses += ' top';

	return (
		<ButtonGroup
			className={buttonGroupClasses}
			color='secondary'
			aria-label='outlined primary button group'
		>
			{buttons}
		</ButtonGroup>
	);
}

function mapStateToProps(oldState) {
	return {
		theme: oldState.theme
	};
}

export default compose(
	connect(mapStateToProps),
	withTranslation('common')
)(ThemeChange) as React.ComponentType<{ display: string }>;
