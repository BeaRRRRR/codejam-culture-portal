import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReducerState, RootAction, AuthorModel } from "../../store/types";
import { actionTypes } from "../../actions";

import "./Search.scss";

const SEARCH_PAGE_TITLE: string = "Belarusian architects";
const AUTHOR_ID_1: string = "author1";
const AUTHOR_ID_2: string = "author2";
const AUTHOR_ID_3: string = "author3";
const AUTHOR_NAME_1: string = "Mikhail";
const AUTHOR_NAME_2: string = "Heinrich";
const AUTHOR_NAME_3: string = "Giuseppe";
const AUTHORS = [
	{ id: AUTHOR_ID_1, name: AUTHOR_NAME_1 },
	{ id: AUTHOR_ID_2, name: AUTHOR_NAME_2 },
	{ id: AUTHOR_ID_3, name: AUTHOR_NAME_3 }
];

interface SearchPanel {
	authorsList: Array<AuthorModel>;
	fetchAuthorsList: (list: Array<AuthorModel>) => object;
}

const Search: React.FC<SearchPanel> = props => {
	const authors = AUTHORS.map(author => {
		const { id, name } = author;
		return (
			<li key={id} className="author-list__item">
				<Link className="author-list__links" to={`/architect/${id}`}>
					{name}
				</Link>
			</li>
		);
	});

	return (
		<div className="search">
			<h2 className="search__title">{SEARCH_PAGE_TITLE}</h2>
			<form className="search__form">
				<fieldset className="search__fieldset">
					<legend>Search architector</legend>
					<input type="search" placeholder="Search"></input>
					<input type="radio" id="set-author-search"></input>
					<label htmlFor="set-author-search">Author</label>
					<input type="radio" id="set-city-search"></input>
					<label htmlFor="set-city-search">City</label>
				</fieldset>
			</form>
			<ul className="search__author-list author-list">{authors}</ul>
		</div>
	);
};

const mapStateToProps = (state: ReducerState) => {
	return {
		authorsList: state.authorsList
	};
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
	return {
		fetchAuthorsList: (authorsList: Array<AuthorModel>) =>
			dispatch({ type: actionTypes.FETCH_AUTHORS_LIST, payload: authorsList })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
