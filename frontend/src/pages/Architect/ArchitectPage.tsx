import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { withRouter } from 'react-router-dom';

import BasicInfo from '../../components/Basic-info';
import Biography from '../../components/Biography';
import WorksList from '../../components/Works-list';
import Gallery from '../../components/Gallery';
import Youtube from '../../components/Youtube';
import Map from '../../components/Map';
import Box from '@material-ui/core/Box';
import ErrorIndicator from '../../components/Error-indicator';
import { withTranslation } from 'react-i18next';
import Progress from '../../styled-components/loading/progress';

import { fetchAuthor, RootAction } from '../../actions';

import './ArchitectPage.scss';
import { ReducerState } from '../../store/types';
import { Work, LifeEvent } from '../../store/types';

interface ArchitectPageProps {
	fetchAuthor: (id: string) => object;
	match: MatchModel;
	videoUrl: string;
	name: string;
	pictureUrl: string;
	summary: string;
	isLoading: boolean;
	birthPlace: string;
	birthdate: string;
	deathDate: string;
	works: Work[];
	lifeEvents: LifeEvent[];
	t: (namespace: string) => string;
	error: Error;
}

interface MatchModel {
	params: { id: string };
}

const ArchitectPage: React.FC<ArchitectPageProps> = props => {
	const {
		fetchAuthor,
		match,
		name,
		pictureUrl,
		summary,
		isLoading,
		birthdate,
		deathDate,
		birthPlace,
		works,
		videoUrl,
		lifeEvents,
		t,
		error
	} = props;

	useEffect(() => {
		fetchAuthor(match.params.id);
	}, [fetchAuthor]);

	if (isLoading) {
		return <div className={'progress-container'}><Progress type='circular' size={100}/></div>;
	}

	if (error) {
		return <ErrorIndicator />;
	}

	return (
		<Box>
			<BasicInfo
				name={name}
				pictureUrl={pictureUrl}
				summary={summary}
				birthPlace={birthPlace}
				birthDate={birthdate}
				deathDate={deathDate}
				t={t}
			/>
			{lifeEvents && <Biography lifeEvents={lifeEvents} t={t} />}
			{works && <WorksList works={works} t={t} />}
			{works && <Gallery works={works} t={t} />}
			{works && <Map works={works} t={t} />}
			{videoUrl && <Youtube videoUrl={videoUrl} />}
		</Box>
	);
};

const mapStateToProps = (state: ReducerState) => {
	if (state.isAuthorLoading) {
		return {
			isLoading: state.isAuthorLoading
		};
	}

	if (state.error) {
		return {
			error: state.error
		};
	}

	return {
		name: state.author.name,
		pictureUrl: state.author.pictureUrl,
		summary: state.author.summary,
		isLoading: state.isAuthorLoading,
		birthdate: state.author.birthdate,
		deathDate: state.author.deathDate,
		birthPlace: state.author.birthPlace,
		works: state.author.works,
		lifeEvents: state.author.lifeEvents,
		videoUrl: state.author.videoUrl,
		error: state.error
	};
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): object => {
	return {
		fetchAuthor: fetchAuthor(dispatch)
	};
};

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
	withTranslation('common')
)(ArchitectPage) as React.ComponentType;
