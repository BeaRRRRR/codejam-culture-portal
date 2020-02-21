import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { withRouter } from 'react-router-dom';

import BasicInfo from '../../components/Basic-info';
import Biography from '../../components/Biography';
import WorksList from '../../components/Works-list';
import Gallery from '../../components/Gallery';
import Youtube from '../../components/Youtube';

import { fetchAuthor, RootAction } from '../../actions';

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

const mapDispatchToProps = (
	dispatch: Dispatch<RootAction>
): any => { // !!! fix type
	return {
		fetchAuthor: fetchAuthor(dispatch)
	};
};

export default compose(
	withRouter,
	connect(null, mapDispatchToProps)
)(ArchitectPage) as React.ComponentType;
