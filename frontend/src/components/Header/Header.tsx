import React, { useState } from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import {
	Paper,
	Tabs,
	Tab,
	Slide,
	Typography,
	Button
} from '@material-ui/core';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import LanguageChange from '../Language-change';
import ThemeChange from '../Theme-change';

import './Header.scss';

function smoothScrollTop() {
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

interface IHeaderProps extends RouteComponentProps {
	t: (nameSpace: string) => string;
}

const Header = (props: IHeaderProps) => {
	const { t } = props;
	const validTabValues = ['/', '/search', '/worklog', '/team'];

	let [isScrolled, setIsScrolled] = useState(false);

	function handleScroll() {
		if (window.scrollY !== 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	}

	document.addEventListener('scroll', handleScroll);

	const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
		props.history.push(newValue);
	};

	let pathname = props.location.pathname.includes('architect')
		? '/search'
		: props.location.pathname;

	if (!validTabValues.includes(pathname)) {
		pathname = '/';
	}

	return (
		<header className='header'>
			<Link to='/' className='header__link'>
				<Typography variant='h1' component='h1'>
					{t('header.title')}
				</Typography>
			</Link>
			<Paper square>
				<Tabs
					value={pathname}
					indicatorColor='primary'
					textColor='primary'
					onChange={handleChange}
					aria-label='disabled tabs example'
				>
					<Tab label={t('header.homeTab')} value='/' />

					<Tab label={t('header.searchTab')} value='/search' />

					<Tab label={t('header.teamTab')} value='/team' />

					<Tab label={t('header.worklogTab')} value='/worklog' />
				</Tabs>
			</Paper>
			<div className='header__btn-scroll-top' onClick={smoothScrollTop}>
				<Slide direction={'up'} in={isScrolled} mountOnEnter unmountOnExit>
					<Button variant='contained' color='primary'>
						<ArrowUpwardIcon />
					</Button>
				</Slide>
			</div>
			<LanguageChange />
			<ThemeChange display={'top'} />
		</header>
	);
};

export default compose(
	withRouter,
	withTranslation('common')
)(Header) as React.ComponentType;
