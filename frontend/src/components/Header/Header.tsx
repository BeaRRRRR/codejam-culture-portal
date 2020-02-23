import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Slide from '@material-ui/core/Slide';
import {withRouter, RouteComponentProps, Link} from 'react-router-dom';
import Button from '../../styled-components/basics/button';

import './Header.scss';

function smoothScrollTop() {
		window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
		});
}

const Header = (props: RouteComponentProps) => {

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

		const pathname = props.location.pathname.includes('architect')
				? '/search'
				: props.location.pathname;

		return (
				<header className='header'>
						<Link to='/' className='header__link'>
								<h1>Architects of Belarus</h1>
						</Link>
						<Paper square>
								<Tabs
										value={pathname}
										indicatorColor='primary'
										textColor='primary'
										onChange={handleChange}
										aria-label='disabled tabs example'
								>

										<Tab label='Home' value='/' />

										<Tab label='Search' value='/search' />

										<Tab label='Worklog' value='/worklog' />

								</Tabs>
						</Paper>
						<div className='header__btn-scroll-top' onClick={smoothScrollTop}>
								<Slide direction={'up'} in={isScrolled} mountOnEnter unmountOnExit>
										<Button variant='contained' color='primary'>Up</Button>
								</Slide>
						</div>
				</header>
		);
};

export default withRouter(Header);
