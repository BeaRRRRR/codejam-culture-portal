import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AuthorService } from '../../services/authorService';
import Skeleton from '@material-ui/lab/Skeleton';
import { withTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import './AuthorOfTheDay.scss';
import Button from '../../styled-components/basics/button';
import ErrorIndicator from '../Error-indicator';

function scrollTop() {
	window.scrollTo(0, 0);
}

interface IAuthorOfTheDayProps {
	t: (namespace: string) => string;
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

	let [error, setError] = useState(false);

	const authorService = new AuthorService();

	let isUnmounted = false;

	async function loadRandomAuthor() {
		try {
			let data = await authorService.getRandomAuthor();
			if (!isUnmounted) {
				setAuthorData(data);
				setError(false);
			}
		} catch (err) {
			setError(true);
		}
	}

	useEffect(() => {
		loadRandomAuthor();
		return () => {
			isUnmounted = true;
		};
	}, []);

	if (error) {
		return <ErrorIndicator />;
	}

	return (
		<Box className={'author-of-the-day'} component='section'>
			<Typography
				className={'author-of-the-day__heading'}
				variant='h3'
				component='h2'
				gutterBottom
			>
				{t('authorOfTheDay.heading').toUpperCase()}
			</Typography>
			<Card className={'author-of-the-day__content'}>
				<Box className={'author-of-the-day__column'}>
					<Typography
						className={'author-of-the-day__row'}
						variant='h4'
						component='h3'
					>
						{authorData.name ? (
							authorData.name
						) : (
							<Skeleton
								variant='text'
								className={'author-of-the-day__text-skeleton'}
							/>
						)}
					</Typography>
					<Typography
						className={'author-of-the-day__row'}
						variant='subtitle1'
						gutterBottom
					>
						{authorData.name ? (
							<>
								{' '}
								{authorData.birthdate.slice(0, 4)} —{' '}
								{authorData.deathDate.slice(0, 4)}{' '}
							</>
						) : (
							<Skeleton
								variant='text'
								className={'author-of-the-day__text-skeleton'}
							/>
						)}
					</Typography>
					<Typography
						className={'author-of-the-day__row author-of-the-day__description'}
						variant='body1'
						component='p'
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
					</Typography>
					<Box className={'author-of-the-day__row'}>
						{authorData.name ? (
							<Link
								className={'author-of-the-day__link'}
								to={'/architect/' + authorData.id}
							>
								<Button variant='contained' color='primary'>
									<Box onClick={scrollTop}>{t('authorOfTheDay.learnMore')}</Box>
								</Button>
							</Link>
						) : (
							<Skeleton variant='rect' width={120} height={36} />
						)}
					</Box>
				</Box>
				<Box className={'author-of-the-day__column'}>
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
				</Box>
			</Card>
		</Box>
	);
}

export default withTranslation('common')(AuthorOfTheDay);
