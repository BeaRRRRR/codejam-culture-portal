import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { Work } from '../../store/types';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import './Gallery.scss';

const createImage = (item: Work) => (
	{
		original: item.imageUrl,
		thumbnail: item.imageUrl
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
			<Typography className={'gallery__heading'} variant='h3' component='h2' gutterBottom>{t('gallery.header')}</Typography>
			<Paper className={'gallery__paper'}>
				<ImageGallery items={images} />
			</Paper>
		</Box>
	);
};

export default Gallery;
