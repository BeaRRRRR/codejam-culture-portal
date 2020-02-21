import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { IAuthorService } from '../../services/authorService';
import BasicInfo from '../../components/Basic-info';
import Biography from '../../components/Biography';
import WorksList from '../../components/Works-list';
import Gallery from '../../components/Gallery';
import Youtube from '../../components/Youtube';

import { RootAction } from '../../store/types';
import { authorActions } from '../../actions';

import './ArchitectPage.scss';

interface ArchitectPageProps {
	fetchAuthor: (id: string) => object;
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
	const { fetchAuthor, match } = props;

	useEffect(() => {
		fetchAuthor(match.params.id);
	}, [fetchAuthor]);

	return (
		<div>
			<BasicInfo name={'1'} summary={'2'} pictureUrl={'3'} />
			<Biography />
			<WorksList />
			<Gallery />
			<Youtube src='' />
		</div>
	);
};

// fix type
const mapDispatchToProps = (dispatch: Dispatch<RootAction>, authorService: IAuthorService): any => {
	return {
		fetchAuthor: authorActions.fetchAuthor(authorService, dispatch)
	};
};

export default compose(
	withRouter,
	connect(null, mapDispatchToProps)
)(ArchitectPage) as React.ComponentType;
