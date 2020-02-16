import React from 'react';
import './Worklog.scss';
import TimeSpent from '../../components/Time-spent';
import MainDifficulties from '../../components/Main-difficulties';
import SelfEvaluation from '../../components/Self-evaluation';

function Worklog() {

	return (
		<div className={'worklog'}>
			<TimeSpent />
			<MainDifficulties />
			<SelfEvaluation />
		</div>
	);
}

export default Worklog;