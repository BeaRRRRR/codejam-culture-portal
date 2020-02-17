import React from 'react';
import './Worklog.scss';
import TimeSpent from '../../components/Time-spent';
import MainDifficulties from '../../components/Main-difficulties';
import SelfEvaluation from '../../components/Self-evaluation';

const selfEvaluationData = [
	{
		scope: 'Min scope',
		points: 50,
		items: [
			{
				points: 10,
				text: 'Main page + page with a list of authors + author\'s page (only pages with content without widgets)'
			},
			{
				points: 10,
				text: 'Page with team members + page with worklog'
			},
			{
				points: 10,
				text: 'Page with list of authors contains search widget'
			},
			{
				points: 20,
				text: 'Portal has two languages;'
			}
		]
	},
	{
		scope: 'Normal scope',
		points: 140,
		items: [
			{
				points: 20,
				text: 'Portal has page with styleguide'
			},
			{
				points: 10,
				text: 'Mobile version is okey'
			},
			{
				points: 10,
				text: 'Ipad/tablet version is okey'
			},
			{
				points: 20,
				text: 'Author\'s page contains timeline'
			},
			{
				points: 10,
				text: 'Author\'s page contains video overlay'
			},
			{
				points: 20,
				text: 'Author\'s page contains photo gallery'
			},
			{
				points: 10,
				text: 'Author\'s page contains map (geowidget)'
			},
			{
				points: 20,
				text: 'Design (typography, icons, colors, links + buttons + input are styled);'
			},
			{
				points: 20,
				text: 'Material-ui / bootstrap is used'
			},
			{
				points: 10,
				text: 'Portal has third language'
			}
		]
	},
	{
		scope: 'Extra scope',
		points: 70,
		items: [
			{
				points: 10,
				text: 'Confidence of the project presentation'
			},
			{
				points: 10,
				text: 'Project is made using gatsbyjs'
			},
			{
				points: 10,
				text: 'Contentful / netlify cms is used for content management'
			},
			{
				points: 20,
				text: 'Animations / special effects like paralax'
			},
			{
				points: 20,
				text: 'Outstanding design'
			},
			{
				points: 20,
				text: 'Storybook/styleguidist/other react styleguide tool usage for the page with styles;'
			}
		]
	}
];

function Worklog() {

	return (
		<div className={'worklog'}>
			<TimeSpent />
			<MainDifficulties />
			<SelfEvaluation data={selfEvaluationData} />
		</div>
	);
}

export default Worklog;
