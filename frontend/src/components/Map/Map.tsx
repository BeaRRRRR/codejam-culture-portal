import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { Work } from '../../store/types';

import './Map.scss';

const GOOGLE_API_KEY = 'AIzaSyDdVGeaV2xofDELkV8F_pIf2mz7m8h1-aY';

const calculateCenterLocation = (points: Array<{ lat: number, lng: number}>) => {
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
}

const Map: React.FC<IMapProps> = ({ works }) => {
	const points = works.map((work) => ({ lat: work.place.lat, lng: work.place.lon }));
	const centerLocation = calculateCenterLocation(points);
	return (
		<div className='map-container'>
			<LoadScript
				googleMapsApiKey={GOOGLE_API_KEY}
			>
				<GoogleMap
					id='example-map'
					mapContainerStyle={{width: '60rem', height: '27rem'}}
					zoom={8}
					center={centerLocation}
				>
					{
						points.map((point, i) => (
							<Marker position={point} key={i} />
						))
					}
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default Map;
