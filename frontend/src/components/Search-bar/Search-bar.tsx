import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { ReducerState, AuthorModel } from '../../store/types';
import { fetchAuthorsList, RootAction } from '../../actions';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './Search-bar.scss';

const SEARCH_PAGE_TITLE: string = 'Belarusian architects';

interface SearchPanel {
	authorsList: Array<AuthorModel>;
	fetchAuthorsList: () => Array<AuthorModel>;
}

const Search: React.FC<SearchPanel> = ({ authorsList, fetchAuthorsList }) => {
	const [state, setState] = React.useState({
		checkedA: true
	});

	useEffect(() => {
		fetchAuthorsList();
	}, [fetchAuthorsList]);

	const handleChange = (name: string) => (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setState({ ...state, [name]: event.target.checked });
	};
	const authors = authorsList.map(author => {
		const { id, name, birthPlace } = author;
		return (
			<li key={id} className='author-list__item'>
				<Link className='author-list__links' to={`/architect/${id}`}>
					{`${name}, ${birthPlace}`}
				</Link>
			</li>
		);
	});

	return (
		<div className='search'>
			<h2 className='search__title'>{SEARCH_PAGE_TITLE}</h2>
			<form className='search__form'>
				<fieldset className='search__fieldset'>
					<legend>Search architector</legend>
					<input type='search' placeholder='Search'></input>
					<FormGroup row>
						<FormControlLabel
							control={
								<Switch
									checked={state.checkedA}
									onChange={handleChange('checkedA')}
									value='checkedA'
								/>
							}
							label={`search for ${state.checkedA ? 'name' : 'city'}`}
						/>
					</FormGroup>
				</fieldset>
			</form>
			<ul className='search__author-list author-list'>{authors}</ul>
		</div>
	);
};

const mapStateToProps = (state: ReducerState): any => {
	return {
		authorsList: state.authorsList
	};
};

const mapDispatchToProps = (
	dispatch: Dispatch<RootAction>
): any => { // !!! fix type
	return {
		fetchAuthorsList: fetchAuthorsList(dispatch)
	};
};

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(Search) as React.ComponentType;
