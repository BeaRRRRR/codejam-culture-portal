import React, { useEffect, Fragment } from 'react';
import { /*Link,*/ withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { ReducerState, AuthorModel } from '../../store/types';
import { fetchAuthorsList, RootAction } from '../../actions';

import Switch from '@material-ui/core/Switch';
import { SearchField } from '../../styled-components';
import {
	Typography,
	Paper,
	Grid,
	FormGroup,
	FormControlLabel,
	List,
	ListItem,
	ListItemProps,
	Divider,
	Box
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import './Search-bar.scss';

interface SearchPanel {
	authorsList: Array<AuthorModel>;
	fetchAuthorsList: () => Array<AuthorModel>;
	t: (namespace: string) => string;
}

const Search: React.FC<SearchPanel> = ({
	authorsList,
	fetchAuthorsList,
	t
}) => {
	const SEARCH_PAGE_TITLE: string = t('search.title');
	const [isByName, setIsByName] = React.useState(true);
	const [term, setTerm] = React.useState('');
	useEffect(() => {
		fetchAuthorsList();
	}, [fetchAuthorsList]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsByName(e.target.checked);
	};

	const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTerm(e.target.value);
	};

	const ListItemLink = (props: ListItemProps<'a', { button?: true }>) => {
		return <ListItem button component='a' {...props} />;
	};

	const visibleAuthors = authorsList.filter(author => {
		if (term.length === 0) return true;
		const { name, birthPlace } = author;
		let variable = (isByName ? name : birthPlace).toLowerCase();
		return variable.includes(term.toLowerCase());
	});

	const authors = visibleAuthors.map((author, index, array) => {
		const { id, name, birthPlace } = author;
		return (
			<Fragment key={id}>
				<ListItemLink className='author-list-item' href={`/#/architect/${id}`}>
					<Box
						minHeight={50}
						width='100%'
						display='flex'
						flexDirection='column'
						alignItems='center'
					>
						<Typography>{name.toUpperCase()}</Typography>
						<Box display='flex' flexDirection='row' alignItems='center'>
							<HomeRoundedIcon color='secondary' />
							<Typography variant='body2' color='textSecondary'>
								{birthPlace}
							</Typography>
						</Box>
					</Box>
				</ListItemLink>
				{index !== array.length - 1 ? <Divider /> : null}
			</Fragment>
		);
	});

	const noAuthorsMessage = (
		<Alert severity='info'>{t('search.notFound')}</Alert>
	);

	return (
		<Grid
			className='search'
			container
			direction='column'
			justify='center'
			alignItems='center'
			spacing={10}
		>
			<Grid item xs={12}>
				<Typography variant='h3' className='search__title'>
					{SEARCH_PAGE_TITLE}
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<Paper className='search__form'>
					<FormGroup row>
						<FormControlLabel
							control={<Switch checked={isByName} onChange={handleChange} />}
							label={t('search.searchBy')}
						/>
						<SearchField
							label={`${
								isByName ? t('search.searchByName') : t('search.searchByCity')
							}`}
							color='secondary'
							variant='outlined'
							onChange={onLabelChange}
						/>
					</FormGroup>
				</Paper>
			</Grid>
			<Grid item xs={5}>
				{authors.length !== 0 ? (
					<Paper className='author-list'>
						<List>{authors}</List>
					</Paper>
				) : (
					noAuthorsMessage
				)}
			</Grid>
		</Grid>
	);
};

const mapStateToProps = (state: ReducerState): any => {
	return {
		authorsList: state.authorsList
	};
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): any => {
	// !!! fix type
	return {
		fetchAuthorsList: fetchAuthorsList(dispatch)
	};
};

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
	withTranslation('common')
)(Search) as React.ComponentType;
