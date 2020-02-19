import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReducerState, RootAction, AuthorModel } from "../../store/types";
import { actionTypes } from "../../actions";
import AuthorService from "../../services/authorService";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import "./Search-bar.scss";

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

const Search: React.FC<SearchPanel> = () => {
	const authorService = new AuthorService();

	const [state, setState] = React.useState({
		checkedA: true
	});

	useEffect(() => {
		authorService.getAllAuthors().then(data => console.log("dat", data));
	});

	const handleChange = (name: string) => (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setState({ ...state, [name]: event.target.checked });
	};
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
					<FormGroup row>
						<FormControlLabel
							control={
								<Switch
									checked={state.checkedA}
									onChange={handleChange("checkedA")}
									value="checkedA"
								/>
							}
							label={`search for ${state.checkedA ? "name" : "city"}`}
						/>
					</FormGroup>
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
