import React from 'react';
import './SelfEvaluation.scss';
import SelfEvaluationListItem from '../Self-evaluation-list-item';

function SelfEvaluation() {

	return (
		<section className={'self-evaluation'}>
			<h2 className={'self-evaluation__heading'}>Self Evaluation</h2>
			<h3 className={'self-evaluation__scope'}>Min scope 50</h3>
			<ul className={'self-evaluation__list'}>
				<SelfEvaluationListItem points={10} text={'Main page + page with a list of authors + author\'s page (only pages with content without widgets);'}/>
				<SelfEvaluationListItem points={10} text={'Page with team members + page with worklog;'}/>
				<SelfEvaluationListItem points={10} text={'Page with list of authors contains search widget;'}/>
				<SelfEvaluationListItem points={20} text={'Portal has two languages;'}/>
			</ul>
			<h3 className={'self-evaluation__scope'}>Normal scope 140</h3>
			<ul className={'self-evaluation__list'}>
				<SelfEvaluationListItem points={20} text={'Portal has page with styleguide;'}/>
				<SelfEvaluationListItem points={10} text={'Mobile version is okey;'}/>
				<SelfEvaluationListItem points={10} text={'Ipad/tablet version is okey;'}/>
				<SelfEvaluationListItem points={10} text={'Author\'s page contains timeline;'}/>
				<SelfEvaluationListItem points={10} text={'Author\'s page contains video overlay;'}/>
				<SelfEvaluationListItem points={20} text={'Author\'s page contains photo gallery;'}/>
				<SelfEvaluationListItem points={10} text={'Author\'s page contains map (geowidget);'}/>
				<SelfEvaluationListItem points={20} text={'Design (typography, icons, colors, links + buttons + input are styled);'}/>
				<SelfEvaluationListItem points={20} text={'Material-ui / bootstrap is used;'}/>
				<SelfEvaluationListItem points={10} text={'Portal has third language;'}/>
			</ul>
			<h3 className={'self-evaluation__scope'}>Extra scope 70</h3>
			<ul className={'self-evaluation__list'}>
				<SelfEvaluationListItem points={10} text={'Confidence of the project presentation;'}/>
				<SelfEvaluationListItem points={10} text={'Project is made using gatsbyjs;'}/>
				<SelfEvaluationListItem points={10} text={'Contentful / netlify cms is used for content management;'}/>
				<SelfEvaluationListItem points={20} text={'Animations / special effects like paralax;'}/>
				<SelfEvaluationListItem points={20} text={'Outstanding design;'}/>
				<SelfEvaluationListItem points={20} text={'Storybook/styleguidist/other react styleguide tool usage for the page with styles.'}/>
			</ul>
		</section>
	);
}

export default SelfEvaluation;