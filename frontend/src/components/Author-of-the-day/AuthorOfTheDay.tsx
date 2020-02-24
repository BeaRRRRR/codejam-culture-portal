import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AuthorService } from '../../services/authorService';
import Skeleton from '@material-ui/lab/Skeleton';
import { withTranslation } from 'react-i18next';

import './AuthorOfTheDay.scss';
import Button from '../../styled-components/basics/button';
import ErrorIndicator from '../Error-indicator';

function scrollTop() {
	window.scrollTo(0, 0);
}

interface IAuthorOfTheDayProps {
	t: (namespace: string) => object;
}

function AuthorOfTheDay({ t }: IAuthorOfTheDayProps) {
	let [authorData, setAuthorData] = useState({
		id: '',
		name: '',
		birthdate: '',
		deathDate: '',
		summary: '',
		pictureUrl: ''
	});

	let [error, setError] = useState(false)

	const authorService = new AuthorService();

	async function loadRandomAuthor() {
		try {
			let data = await authorService.getRandomAuthor();
			setAuthorData(data);
			setError(false);
		} catch (err) {
			setError(true);
		}
	}

	useEffect(() => {
		loadRandomAuthor();
	}, []);

	if (error) {
		return <ErrorIndicator />;
	}

	return (
		<section className={'author-of-the-day'}>
			<h2 className={'author-of-the-day__heading'}>
				{t('authorOfTheDay.heading')}
			</h2>
			<Card className={'author-of-the-day__content'}>
				<div className={'author-of-the-day__column'}>
					<h3 className={'author-of-the-day__row'}>
						{authorData.name ? (
							authorData.name
						) : (
								<Skeleton
									variant='text'
									className={'author-of-the-day__text-skeleton'}
								/>
							)}
					</h3>
					<div className={'author-of-the-day__row'}>
						{authorData.name ? (
							<>
								{' '}
								{authorData.birthdate.slice(0, 4)} — {authorData.deathDate.slice(0, 4)}
								{' '}
							</>
						) : (
								<Skeleton
									variant='text'
									className={'author-of-the-day__text-skeleton'}
								/>
							)}
					</div>
					<div
						className={'author-of-the-day__row author-of-the-day__description'}
					>
						{authorData.name ? (
							authorData.summary
						) : (
								<>
									<Skeleton
										variant='text'
										className={'author-of-the-day__text-skeleton'}
									/>
									<Skeleton
										variant='text'
										className={'author-of-the-day__text-skeleton'}
									/>
								</>
							)}
					</div>
					<div className={'author-of-the-day__row'}>
						{authorData.name ? (
							<Link
								className={'author-of-the-day__link'}
								to={'/architect/' + authorData.id}
							>
								<Button variant='contained' color='primary'>
									<div onClick={scrollTop}>{t('authorOfTheDay.learnMore')}</div>
								</Button>
							</Link>
						) : (
								<Skeleton variant='rect' width={120} height={36} />
							)}
					</div>
				</div>
				<div className={'author-of-the-day__column'}>
					{authorData.name ? (
						<img src={authorData.pictureUrl} alt='architector of the day' />
					) : (
							<Skeleton
								className={'author-of-the-day__image-skeleton'}
								variant='rect'
								width={200}
								height={250}
							/>
						)}
				</div>
			</Card>
		</section>
	);
}

export default withTranslation('common')(AuthorOfTheDay);
