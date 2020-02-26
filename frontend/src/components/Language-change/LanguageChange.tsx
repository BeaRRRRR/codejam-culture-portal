import React, { useState, MouseEvent } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';

import './LanguageChange.scss';

const useStyles = makeStyles(() =>
	createStyles({
		active: {
			background: 'red',
			color: 'black'
		}
	})
);

interface ILanguageChangeProps {
	i18n: { changeLanguage: (lang: string) => object };
}

function LanguageChange(props: ILanguageChangeProps) {
	const classes = useStyles();
	const { i18n } = props;
	const langArr: string[] = ['EN', 'RU', 'BE'];

	const [language, setLanguage] = useState('en');

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		const selectedLang: string = e.currentTarget.value;

		setLanguage(selectedLang);
		i18n.changeLanguage(selectedLang);
	};

	const renderedButtons = langArr.map((item: string) => {
		const value: string = item.toLowerCase();
		return (
			<Button
				value={value}
				onClick={handleClick}
				className={value === language ? classes.active : ''}
				key={item}
			>
				{item}
			</Button>
		);
	});

	return (
		<ButtonGroup
			className='button-group'
			color='secondary'
			aria-label='outlined primary button group'
		>
			{renderedButtons}
		</ButtonGroup>
	);
}

export default withTranslation('common')(LanguageChange);
