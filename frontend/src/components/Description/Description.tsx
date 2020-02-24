import React from 'react';
import './Description.scss';
import { withTranslation } from 'react-i18next';

interface IDescriptionProps {
	t: (namespace: string) => object;
}

function Description({ t }: IDescriptionProps) {
	return (
		<section className={'description'}>
			<h2 className={'description__heading'}>{t('description.header')}</h2>
			<div className={'description__text'}>{t('description.p1')}</div>
			<div className={'description__text'}>{t('description.p2')}</div>
			<div className={'description__text'}>{t('description.p3')}</div>
		</section>
	);
}

export default withTranslation('common')(Description);
