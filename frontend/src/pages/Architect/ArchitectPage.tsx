import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { withRouter } from 'react-router-dom';

import AuthorService from '../../services/authorService';
import BasicInfo from '../../components/Basic-info';
import Biography from '../../components/Biography';
import WorksList from '../../components/Works-list';
import Gallery from '../../components/Gallery';
import Youtube from '../../components/Youtube';

import { RootAction, AuthorModelExtended } from '../../store/types';
import { actionTypes } from '../../actions';

import './ArchitectPage.scss';

interface ArchitectPageProps {
	fetchAuthor: (author: AuthorModelExtended) => object;
	match: MatchModel;
	video: string;
	name: string;
	pictureUrl: string;
	summary: string;
}

interface MatchModel {
	params: { id: string };
}

const ArchitectPage: React.FC<ArchitectPageProps> = (props) => {
	const { fetchAuthor, match, name, summary, pictureUrl } = props;
	const authorService = new AuthorService();

	useEffect(() => {
		authorService.getAuthor(match.params.id)
			.then(data => fetchAuthor(data));
	}, []);

	return (
		<div>
			<BasicInfo name={name} summary={summary} pictureUrl={pictureUrl} />
			<Biography />
			<WorksList />
			<Gallery />
			<Youtube src='' />
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
	return {
		fetchAuthor: (author: AuthorModelExtended) =>
			dispatch({
				type: actionTypes.FETCH_AUTHOR,
				payload: author
			})
	};
};

const mapStateToProps = ({ author: { name, pictureUrl, summary } }:
	{ author: AuthorModelExtended }) => {
	return {
		name, pictureUrl, summary
	};
};

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(ArchitectPage) as React.ComponentType;
