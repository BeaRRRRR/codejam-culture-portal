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
				text: 'Main page + page with a list of authors + author\'s page (only pages with content without widgets)',
				done: true,
			},
			{
				points: 10,
				text: 'Page with team members + page with worklog',
				done: true,
			},
			{
				points: 10,
				text: 'Page with list of authors contains search widget',
				done: true,
			},
			{
				points: 20,
				text: 'Portal has two languages',
				done: true,
			}
		]
	},
	{
		scope: 'Normal scope',
		points: 140,
		items: [
			{
				points: 20,
				text: 'Portal has page with styleguide',
				done: true,
			},
			{
				points: 10,
				text: 'Mobile version is okey',
				done: true,
			},
			{
				points: 10,
				text: 'Ipad/tablet version is okey',
				done: true,
			},
			{
				points: 20,
				text: 'Author\'s page contains timeline',
				done: true,
			},
			{
				points: 10,
				text: 'Author\'s page contains video overlay',
				done: true,
			},
			{
				points: 20,
				text: 'Author\'s page contains photo gallery',
				done: true,
			},
			{
				points: 10,
				text: 'Author\'s page contains map (geowidget)',
				done: true,
			},
			{
				points: 20,
				text: 'Design (typography, icons, colors, links + buttons + input are styled);',
				done: true,
			},
			{
				points: 20,
				text: 'Material-ui / bootstrap is used',
				done: true,
			},
			{
				points: 10,
				text: 'Portal has third language',
				done: true,
			}
		]
	},
	{
		scope: 'Extra scope',
		points: 70,
		items: [
			{
				points: 10,
				text: 'Confidence of the project presentation',
				done: true,
			},
			{
				points: 10,
				text: 'Project is made using gatsbyjs',
				done: true,
			},
			{
				points: 10,
				text: 'Contentful / netlify cms is used for content management',
				done: true,
			},
			{
				points: 20,
				text: 'Animations / special effects like paralax',
				done: true,
			},
			{
				points: 20,
				text: 'Outstanding design',
				done: true,
			},
			{
				points: 20,
				text: 'Storybook/styleguidist/other react styleguide tool usage for the page with styles;',
				done: true,
			}
		]
	}
];

const Worklog = () => {

	return (
		<div className={'worklog'}>
			<TimeSpent />
			<MainDifficulties />
			<SelfEvaluation data={selfEvaluationData} />
		</div>
	);
};

export default Worklog;
