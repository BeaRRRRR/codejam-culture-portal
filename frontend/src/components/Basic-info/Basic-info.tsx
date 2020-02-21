import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ReducerState } from '../../store/types';

import './Basic-info.scss';

interface BasicInfoProps {
	pictureUrl: string;
	name: string;
	summary: string;
	isLoading: boolean;
}

const BasicInfo: React.FC<BasicInfoProps> = (props) => {
	const { name, pictureUrl, summary, isLoading } = props;

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='basic-info'>
			<img
				src={pictureUrl}
				alt='author image'
				className='basic-info__image' />
			<h2 className='basic-info__title'>{name}</h2>
			<p className='basic-info__life' >(1893 — 1968)</p>
			<p className='basic-info__description'>{summary}</p>
		</div>
	);
};

const mapStateToProps = (state: ReducerState) => {
	if (state.isAuthorLoading) {
		return {
			isLoading: state.isAuthorLoading
		};
	}

	return {
		name: state.author.name,
		pictureUrl: state.author.pictureUrl,
		summary: state.author.summary,
		isLoading: state.isAuthorLoading
	};
};

export default compose(
	withRouter,
	connect(mapStateToProps)
)(BasicInfo) as React.ComponentType;
