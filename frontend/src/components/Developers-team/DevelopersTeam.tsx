import * as React from 'react';
import Developer from '../Developer';
import './DevelopersTeam.scss';

function DevelopersTeam() {

	return (
		<section className={'developers-team'}>
			<h2 className={'developers-team__heading'}>DevelopersTeam</h2>
			<div className={'developers-team__container'}>
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