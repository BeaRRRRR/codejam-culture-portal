import React, {useEffect, useState} from 'react';
import {Card} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { AuthorService } from '../../services/authorService';
import Skeleton from '@material-ui/lab/Skeleton';

import './AuthorOfTheDay.scss';
import Button from '../../styled-components/basics/button';

function scrollTop() {
		window.scrollTo(0, 0);
}

function AuthorOfTheDay() {
		let [authorData, setAuthorData] = useState({
				id: undefined,
				name: undefined,
				birthdate: undefined,
				deathDate: undefined,
				summary: undefined,
				pictureUrl: undefined
		});

		const authorService = new AuthorService();

		async function loadRandomAuthor() {
				let data = await authorService.getRandomAuthor();
				setAuthorData(data);
		}

		useEffect(() => {
				loadRandomAuthor();
		}, []);

		return (
				<section className={'author-of-the-day'}>
						<h2 className={'author-of-the-day__heading'}>Author of the day</h2>
						<Card className={'author-of-the-day__content'}>
								<div className={'author-of-the-day__column'}>
										<h3 className={'author-of-the-day__row'}>
												{authorData.name ? authorData.name :
														<Skeleton variant='text' className={'author-of-the-day__text-skeleton'} />}
										</h3>
										<div className={'author-of-the-day__row'}>
												{authorData.name ?
														<> {authorData.birthdate} — {authorData.deathDate} </>
														: <Skeleton variant='text' className={'author-of-the-day__text-skeleton'} />}
										</div>
										<div className={'author-of-the-day__row author-of-the-day__description'}>
												{authorData.name ? authorData.summary : <>
														<Skeleton variant='text' className={'author-of-the-day__text-skeleton'} />
														<Skeleton variant='text' className={'author-of-the-day__text-skeleton'} />
												</>}
										</div>
										<div className={'author-of-the-day__row'}>
												{authorData.name ?
														<Link className={'author-of-the-day__link'} to={'/architect/' + authorData.id}>
																<Button variant='contained' color='primary'>
																		<div onClick={scrollTop}>
																				Learn more
																		</div>
																</Button>
														</Link>
														:
														<Skeleton variant='rect' width={120} height={36} />}
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
