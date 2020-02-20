import React from 'react';
import './AuthorOfTheDay.scss';
import {Button, Card} from '@material-ui/core';
import {Link} from 'react-router-dom';

function AuthorOfTheDay() {

		function scrollTop() {
				window.scrollTo(0, 0);
		}

		return (
				<section className={'author-of-the-day'}>
						<h2 className={'author-of-the-day__heading'}>Author of the day</h2>
						<Card className={'author-of-the-day__content'}>
								<div className={'author-of-the-day__column'}>
										<h3>Михаил Павлович Парусников</h3>
										<div>01.01.1970 — 01.01.2010</div>
										<div className={'author-of-the-day__description'}>Cоветский архитектор, действительный член АА СССР, академик АН БССР. Педагог, профессор. Лауреат Государственной премии Белорусской ССР.</div>
										<div>
												<Link className={'author-of-the-day__link'} to='/architect/author1'>
														<Button variant='contained' color='primary'>
																<div onClick={scrollTop}>
																		Learn more
																</div>
														</Button>
												</Link>
										</div>
								</div>
								<div className={'author-of-the-day__column'}>
										<img src='https://grnkvch.github.io/CodeJam-Culture-Portal/static/baklanov-e8c0f280f4b86d29526072e70c9ee431.jpg' alt='architector of the day' />
								</div>
						</Card>
				</section>
		);
}

export default AuthorOfTheDay;
