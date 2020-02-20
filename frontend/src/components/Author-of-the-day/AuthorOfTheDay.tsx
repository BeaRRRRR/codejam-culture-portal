import React, {useEffect, useState} from 'react';
import {Button, Card} from '@material-ui/core';
import {Link} from 'react-router-dom';
import AuthorService from '../../services/authorService';
import Skeleton from '@material-ui/lab/Skeleton';

import './AuthorOfTheDay.scss';

function scrollTop() {
		window.scrollTo(0, 0);
}

function AuthorOfTheDay() {
		let [authorData, setAuthorData] = useState({
				name: undefined,
				birthdate: undefined,
				deathDate: undefined,
				summary: undefined,
				pictureUrl: undefined
		});

		const authorService = new AuthorService();

		useEffect(() => {
				authorService.getAuthor('5aXGlpoXkVSBdlBgNXDxwX')
						.then((data) => {
								setAuthorData(data);
						});
		}, []);

		return (
				<section className={'author-of-the-day'}>
						<h2 className={'author-of-the-day__heading'}>Author of the day</h2>
						<Card className={'author-of-the-day__content'}>
								<div className={'author-of-the-day__column'}>
										<h3 className={'author-of-the-day__row'}>
												{authorData.name ? authorData.name : <Skeleton variant='text' />}
										</h3>
										<div className={'author-of-the-day__row'}>
												{authorData.name ? authorData.birthdate : <Skeleton variant='text' />}
												— {authorData.name ? authorData.deathDate : <Skeleton variant='text' />}
										</div>
										<div className={'author-of-the-day__row author-of-the-day__description'}>
												{authorData.name ? authorData.summary : <>
														<Skeleton variant='text' />
														<Skeleton variant='text' />
														<Skeleton variant='text' />
														<Skeleton variant='text' />
												</>}
										</div>
										<div className={'author-of-the-day__row'}>
												{/*TODO: change link path to accurate page*/}
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
										{authorData.name ?
												<img src={authorData.pictureUrl} alt='architector of the day' />
												:
												<Skeleton className={'author-of-the-day__image-skeleton'} variant='rect' width={200} height={250} />}
								</div>
						</Card>
				</section>
		);
}

export default AuthorOfTheDay;
