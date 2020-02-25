import React from 'react';
import Box from '@material-ui/core/Box';

import { Work } from '../../store/types';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

const createImage = (item: Work) =>  (
	{
		original: item.imageUrl,
		thumbnail: item.imageUrl
	}
);

interface GalleryProps {
	works: Work[];
}

const Gallery: React.FC<GalleryProps> = (props) =>  {
	const { works } = props;

	const images = works.map(createImage);

	return (
		<Box>
			<ImageGallery items={images} />
		</Box>
	);
};

export default Gallery;
