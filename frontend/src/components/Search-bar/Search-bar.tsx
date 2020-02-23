import React, { useEffect } from 'react';
import { /*Link,*/ withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { ReducerState, AuthorModel } from '../../store/types';
import { fetchAuthorsList, RootAction } from '../../actions';

import Switch from '@material-ui/core/Switch';
import {SearchField} from '../../styled-components';
import {Typography, Paper, Grid, FormGroup, FormControlLabel, List, ListItem, ListItemText, ListItemProps } from '@material-ui/core';

import './Search-bar.scss';

const SEARCH_PAGE_TITLE: string = 'Belarusian architects';

interface SearchPanel {
	authorsList: Array<AuthorModel>;
	fetchAuthorsList: () => Array<AuthorModel>;
}

const Search: React.FC<SearchPanel> = ({ authorsList, fetchAuthorsList }) => {
	const [isByName, setIsByName] = React.useState(true);

	useEffect(() => {
		fetchAuthorsList();
	}, [fetchAuthorsList]);

	const handleChange = () => (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setIsByName( event.target.checked );
	};

	const searchFieldChange = (e) => {console.log(e.target.value)};

	const ListItemLink = (props: ListItemProps<'a', { button?: true }>) => {
		return <ListItem button component="a" {...props} />;
	}

	const authors = authorsList.map(author => {
		const { id, name, birthPlace } = author;
		return (
			<ListItemLink key={id} className='author-list-item' href={`/#/architect/${id}`}>
					<ListItemText color='primary' primary={`${name}, ${birthPlace}`}/>
			</ListItemLink>
		);
	});

	return (
		<Grid className='search'
				  container
					direction="column"
					justify="center"
					alignItems="center"
					spacing={10}>
			<Grid item xs={12}>
				<Typography variant='h3' className='search__title'>{SEARCH_PAGE_TITLE}</Typography>
			</Grid>
			<Grid item xs={12}>
				<Paper className='search__form'>
					<FormGroup row>
						<FormControlLabel
							control={
								<Switch
									checked={isByName}
									onChange={handleChange()}
									value='checkedA'
								/>
							}
							label={'Search by'}
						/>
						<SearchField
							label={`${isByName ? 'Name' : 'City'}`}
							color='secondary'
							variant='outlined'
							onChange={searchFieldChange}/>
					</FormGroup>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper className='author-list'>
					<List>{authors}</List>
				</Paper>
			</Grid>
		</Grid>
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
