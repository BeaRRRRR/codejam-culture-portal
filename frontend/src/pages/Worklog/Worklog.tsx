import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';

import TimeSpent from '../../components/Time-spent';
import MainDifficulties from '../../components/Main-difficulties';
import SelfEvaluation from '../../components/Self-evaluation';
import { withTranslation } from 'react-i18next';

import './Worklog.scss';

interface IWorklogProps {
	t: (namespace: string) => string;
}

const Worklog = ({t}: IWorklogProps): ReactElement => {
	const selfEvaluationData = [
		{
			scope: t('minScope.header'),
			points: 50,
			items: [
				{
					points: 10,
					text: t('minScope.text1'),
					done: true
				},
				{
					points: 10,
					text: t('minScope.text2'),
					done: true
				},
				{
					points: 10,
					text: t('minScope.text3'),
					done: true
				},
				{
					points: 20,
					text: t('minScope.text4'),
					done: true
				}
			]
		},
		{
			scope: t('normalScope.header'),
			points: 140,
			items: [
				{
					points: 20,
					text: t('normalScope.text1'),
					done: true
				},
				{
					points: 10,
					text: t('normalScope.text2'),
					done: true
				},
				{
					points: 10,
					text: t('normalScope.text3'),
					done: true
				},
				{
					points: 10,
					text: t('normalScope.text4'),
					done: true
				},
				{
					points: 10,
					text: t('normalScope.text5'),
					done: true
				},
				{
					points: 20,
					text: t('normalScope.text6'),
					done: true
				},
				{
					points: 10,
					text: t('normalScope.text7'),
					done: true
				},
				{
					points: 20,
					text: t('normalScope.text8'),
					done: true
				},
				{
					points: 20,
					text: t('normalScope.text9'),
					done: true
				},
				{
					points: 10,
					text: t('normalScope.text10'),
					done: true
				}
			]
		},
		{
			scope: t('extraScope.header'),
			points: 70,
			items: [
				{
					points: 10,
					text: t('extraScope.text1'),
					done: true
				},
				{
					points: 10,
					text: t('extraScope.text2'),
					done: false
				},
				{
					points: 10,
					text: t('extraScope.text3'),
					done: true
				},
				{
					points: 20,
					text: t('extraScope.text4'),
					done: true
				},
				{
					points: 20,
					text: t('extraScope.text5'),
					done: true
				},
				{
					points: 20,
					text: t('extraScope.text6'),
					done: true
				}
			]
		}
	];

	return (
		<Box className='worklog'>
			<TimeSpent />
			<MainDifficulties />
			<SelfEvaluation data={selfEvaluationData} t={t} />
		</Box>
	);
};

export default withTranslation('common')(Worklog);
