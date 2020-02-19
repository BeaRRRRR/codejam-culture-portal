import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import './Map.scss';

const GOOGLE_API_KEY = 'AIzaSyDdVGeaV2xofDELkV8F_pIf2mz7m8h1-aY';

const points = [
	{ lat: 42.02, lng: -77.01 },
	{ lat: 42.03, lng: -77.02 },
	{ lat: 41.03, lng: -77.04 },
	{ lat: 42.05, lng: -77.02 }
];

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

const Map = () => {
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
