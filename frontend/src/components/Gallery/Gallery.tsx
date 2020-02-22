import React from 'react';
import ImageGallery from 'react-image-gallery';

import { Work } from '../../store/types';

import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import './Gallery.scss';

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
		<div className='gallery-container'>
			<ImageGallery items={images} additionalClass='gallery' />
		</div>
	)

};

export default Gallery;
