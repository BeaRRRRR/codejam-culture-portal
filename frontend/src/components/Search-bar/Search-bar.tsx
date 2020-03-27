import React, {useEffect, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Dispatch, compose} from 'redux';
import {withTranslation} from 'react-i18next';
import {ReducerState, AuthorModel} from '../../store/types';
import {fetchAuthorsList, RootAction} from '../../actions';

import Switch from '@material-ui/core/Switch';
import {SearchField} from '../../styled-components';
import {
		Typography,
		Paper,
		Grid,
		FormGroup,
		FormControlLabel,
		List,
		Divider,
		Box
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import SearchItem from '../Search-item';
import Progress from '../../styled-components/loading/progress';
import Container from '@material-ui/core/Container';

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

		const visibleAuthors = authorsList.filter(author => {
				if (term.length === 0) return true;
				const {name, birthPlace} = author;
				let variable = (isByName ? name : birthPlace).toLowerCase();
				return variable.includes(term.toLowerCase());
		});

		const authors = visibleAuthors.map((author, index, array) => {
				const {id, name, birthPlace} = author;
				return (
						<Fragment key={id}>
								<SearchItem id={id} name={name} birthPlace={birthPlace} />
								{index !== array.length - 1 ? <Divider /> : null}
						</Fragment>
				);
		});

		const noAuthorsMessage = (
				<Alert severity='info'>{t('search.notFound')}</Alert>
		);

		return (
				<Grid
						container
						component='section'
						justify='center'
						alignContent='center'
						spacing={0}
				>
						<Grid item lg={11} md={11} sm={11}>
								<Box mt={[3, 6, 8, 10]}>
										<Typography component='h2' variant='h3' align='center' gutterBottom>
												{SEARCH_PAGE_TITLE.toUpperCase()}
										</Typography>
								</Box>
						</Grid>
						<Grid item lg={7} md={8} sm={11} xs={11}>
								<Box mb={[3, 6, 8, 10]}>
										<Paper>
												<Box p={2} display='flex' justifyContent='center'>
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
												</Box>
										</Paper>
								</Box>
						</Grid>
						<Grid item lg={7} md={8} sm={11} xs={11}>
								{authorsList.length !== 0 ?
										authors.length !== 0 ? (
												<Paper>
														<List>{authors}</List>
												</Paper>
										) : (
												noAuthorsMessage
										) : <Container className={'progress-container'}><Progress type='circular' size={100} /></Container>}
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
		return {
				fetchAuthorsList: fetchAuthorsList(dispatch)
		};
};

export default compose(
		withRouter,
		connect(mapStateToProps, mapDispatchToProps),
		withTranslation('common')
)(Search) as React.ComponentType;
