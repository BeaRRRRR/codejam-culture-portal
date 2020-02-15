import * as React from 'react';
import Developer from '../Developer';
import './DevelopersTeam.scss';

function DevelopersTeam() {

	return (
		<section className={'DevelopersTeam'}>
			<h2>DevelopersTeam</h2>
			<div className={'DevelopersTeam__container'}>
				<Developer devName={'Alex_F'}/>
				<Developer devName={'Minitron'}/>
				<Developer devName={'vitalis'}/>
				<Developer devName={'wlukla'}/>
				<Developer devName={'BeaRRRR'}/>
				<Developer devName={'alex_andrews'}/>
			</div>
		</section>
	);
}

export default DevelopersTeam;