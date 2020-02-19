import React from 'react';

import BasicInfo from '../../components/Basic-info';
import Biography from '../../components/Biography';
import WorksList from '../../components/Works-list';
import Gallery from '../../components/Gallery';
import Youtube from '../../components/Youtube';
import Map from '../../components/Map';

import './ArchitectPage.scss';

function ArchitectPage() {
	return (
		<div>
			<BasicInfo />
			<Biography />
			<WorksList />
			<Gallery />
			<Youtube src='k4MWgNsxd_c' />
			<Map />
		</div>
	);
}

export default ArchitectPage;
