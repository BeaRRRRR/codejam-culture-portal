import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch, compose } from "redux";
import { withRouter, RouteComponentProps } from "react-router-dom";

import AuthorService from "../../services/authorService";
import BasicInfo from "../../components/Basic-info";
import Biography from "../../components/Biography";
import WorksList from "../../components/Works-list";
import Gallery from "../../components/Gallery";
import Youtube from "../../components/Youtube";

import { RootAction, AuthorModelExtended } from "../../store/types";
import { actionTypes } from "../../actions";

import "./ArchitectPage.scss";

interface ArchitectPageProps {
	fetchAuthor: (author: AuthorModelExtended) => object;
	match: RouteComponentProps;
}

const ArchitectPage: React.FC<ArchitectPageProps> = ({
	fetchAuthor,
	match
}) => {
	console.log(match);
	const authorService = new AuthorService();

	useEffect(() => {
		authorService
			.getAuthor("5aXGlpoXkVSBdlBgNXDxwX")
			.then(data => fetchAuthor(data));
	}, []);

	return (
		<div>
			<BasicInfo />
			<Biography />
			<WorksList />
			<Gallery />
			<Youtube src="k4MWgNsxd_c" />
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

export default compose(
	withRouter,
	connect(null, mapDispatchToProps)
)(ArchitectPage) as React.ComponentType;
