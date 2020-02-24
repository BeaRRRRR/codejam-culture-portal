import React, {MouseEvent} from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {switchTheme} from '../../actions';
import {connect} from 'react-redux';

import './ThemeChange.scss';

const useStyles = makeStyles(() =>
		createStyles({
				active: {
						background: 'red'
				}
		})
);

function ThemeChange(props) {
		const classes = useStyles();
		let buttonNames = ['light', 'dark'];
		let buttons: JSX.Element[] = [];

		function handleClick(e: MouseEvent<HTMLButtonElement>) {
				const selectedTheme: string = e.currentTarget.value;
				if (selectedTheme !== props.theme) {
						switchTheme(selectedTheme);
				}
		}

		buttonNames.map((buttonName) => {
				buttons.push(
						<Button
								onClick={handleClick}
								value={buttonName}
								key={buttonName}
								className={buttonName === props.theme ? classes.active : ''}
						>
								{buttonName}
						</Button>
				);
		});

		let buttonGroupClasses = 'theme-change-button-group';
		if (props.display === 'bottom')
				buttonGroupClasses += ' bottom';
		else buttonGroupClasses += ' top';

		return (
				<ButtonGroup
						className={buttonGroupClasses}
						color='primary'
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
