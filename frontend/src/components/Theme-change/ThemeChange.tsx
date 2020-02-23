import React, {MouseEvent, useState} from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from '@material-ui/core/styles';

import './ThemeChange.scss';

const useStyles = makeStyles(() =>
		createStyles({
				active: {
						background: 'red'
				}
		})
);

function ThemeChange() {
		const classes = useStyles();
		let buttonNames = ['light', 'dark'];
		let buttons: JSX.Element[] = [];

		let [curTheme, setCurTheme] = useState(buttonNames[0]);

		function handleClick(e: MouseEvent<HTMLButtonElement>) {
				const selectedTheme: string = e.currentTarget.value;
				console.log(selectedTheme);
				if (selectedTheme !== curTheme) setCurTheme(selectedTheme);
		}

		buttonNames.map((buttonName) => {
				buttons.push(
						<Button
								onClick={handleClick}
								value={buttonName}
								key={buttonName}
								className={buttonName === curTheme ? classes.active : ''}
						>
								{buttonName}
						</Button>
				);
		});

		return (
				<ButtonGroup
						className='theme-change-button-group'
						color='primary'
						aria-label='outlined primary button group'
				>
						{buttons}
				</ButtonGroup>
		);
}

export default ThemeChange;
