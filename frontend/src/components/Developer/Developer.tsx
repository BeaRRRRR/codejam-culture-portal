import React from 'react';
import './Developer.scss';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';

interface DeveloperInterface {
		name: string;
		linkToImage?: string;
		linkToGithub: string;
		contribution: string;
}

function Developer({name, linkToImage, linkToGithub, contribution}: DeveloperInterface) {

		return (
				<>
						<Card className={'developers-team__item'}>
								<CardMedia
										className={'developers-team__image'}
										image={linkToImage}
										title={name}
										component='img'
								/>
								<CardContent>
										<Typography variant='h5' component='h3' className={'developers-team__name'}>
												{name}
										</Typography>
										<Typography variant='body2' component='p' className={'developers-team__contribution'}>
												{contribution}
										</Typography>
								</CardContent>
								<CardActions>
										<a className={'developers-team__link'} href={linkToGithub}><Button size='small'>Github</Button></a>
								</CardActions>
						</Card>
						{/*<div className={'developers-team__item'}>*/}
						{/*		<div>{name}</div>*/}
						{/*		<div className={'developers-team__image'}><img src={linkToImage} alt={name} /></div>*/}
						{/*		<div><a href={linkToGithub}>Github</a></div>*/}
						{/*		<div>{contribution}</div>*/}
						{/*</div>*/}
				</>
		);
}

export default Developer;
