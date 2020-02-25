import React, {MouseEvent} from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {switchTheme} from '../../actions';
import {connect} from 'react-redux';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

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

function ThemeChange({display, theme}: ThemeChangeInterface) {
		const classes = useStyles();
		let buttonNames = ['light', 'dark'];

		function handleClick(e: MouseEvent<HTMLButtonElement>) {
				const selectedTheme: string = e.currentTarget.value;
				if (selectedTheme !== theme) {
						switchTheme(selectedTheme);
				}
		}

		let buttons: JSX.Element[] = buttonNames.map((buttonName) => {
				return (
						<Button
								onClick={handleClick}
								value={buttonName}
								key={buttonName}
								className={buttonName === theme ? classes.active : ''}
						>
								{buttonName === 'light' ? <WbSunnyIcon /> : <Brightness3Icon />}
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

export default connect(mapStateToProps)(ThemeChange);
