import React from 'react';
import { Box, Typography, Paper } from '@material-ui/core';

import { Work } from '../../store/types';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

import './Gallery.scss';

const createImage = (item: Work) => (
	{
		original: item.imageUrl,
		thumbnail: item.imageUrl,
		originalClass: 'gallery__image'
	}
);

interface GalleryProps {
	works: Work[];
	t: (namespace: string) => string;
}

const Gallery: React.FC<GalleryProps> = (props) => {
	const { works, t } = props;

	const images = works.map(createImage);

	return (
		<Box className='gallery' component='section'>
			<Typography
				className='gallery__heading'
				variant='h3'
				component='h2'
				gutterBottom
			>
				{t('gallery.header')}
			</Typography>
			<Paper className={'gallery__paper'}>
				<ImageGallery items={images} />
			</Paper>
		</Box>
	);
};

export default Gallery;
