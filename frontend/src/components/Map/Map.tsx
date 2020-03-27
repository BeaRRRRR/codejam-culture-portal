import React from 'react';
import { Box, Typography, Paper } from '@material-ui/core';

import { GoogleMap, Marker } from '@react-google-maps/api';

import { Work } from '../../store/types';

import './Map.scss';

const calculateCenterLocation = (points: Array<{ lat: number, lng: number }>) => {
	const res = points.reduce((a, b) => (
		{
			lat: a.lat + b.lat,
			lng: a.lng + b.lng
		}
	));

	return {
		lat: res.lat / points.length,
		lng: res.lng / points.length
	};
};
interface IMapProps {
	works: Work[];
	t: (namespace: string) => string;
}

const Map: React.FC<IMapProps> = ({ works, t }) => {
	const points = works.map((work) => ({ lat: work.place.lat, lng: work.place.lon }));
	const centerLocation = calculateCenterLocation(points);
	return (
		<Box className='map' component='section'>
			<Typography
				className={'map__heading'}
				variant='h3'
				component='h2'
				gutterBottom
			>
				{t('map.header')}
			</Typography>
			<Paper className={'map__paper'}>
				<GoogleMap
					id='example-map'
					mapContainerStyle={{ width: '66vw', height: '27rem' }}
					zoom={8}
					center={centerLocation}
				>
					{
						points.map((point, i) => (
							<Marker position={point} key={i} />
						))
					}
				</GoogleMap>
			</Paper>
		</Box>
	);
};

export default Map;
