import { action, ActionType } from 'typesafe-actions';

import { Dispatch } from 'redux';

import { AuthorModel, AuthorModelExtended, DeveloperModel } from '../store/types';

import { AuthorService, IAuthorService } from '../services/authorService';
import { DeveloperService, IDeveloperService } from '../services/developerService';
import store from '../store/store';

const authorService: IAuthorService = new AuthorService();
const developerService: IDeveloperService = new DeveloperService();

enum actionTypes {
	FETCH_AUTHORS_LIST_REQUEST = 'FETCH_AUTHORS_LIST_REQUEST',
	FETCH_AUTHORS_LIST_SUCCESS = 'FETCH_AUTHORS_LIST_SUCCESS',

	FETCH_AUTHOR_REQUEST = 'FETCH_AUTHOR_REQUEST',
	FETCH_AUTHOR_SUCCESS = 'FETCH_AUTHOR_SUCCESS',

	FETCH_FAILURE = 'FETCH_FAILURE',

	SWITCH_THEME = 'SWITCH_THEME',

	FETCH_DEVELOPERS_LIST_REQUEST = 'FETCH_DEVELOPERS_LIST_REQUEST',
	FETCH_DEVELOPERS_LIST_SUCCESS = 'FETCH_DEVELOPERS_LIST_SUCCESS'
}

export type RootAction = ActionType<typeof fetchAuthor | typeof fetchAuthorsList | typeof switchTheme | typeof fetchDevelopersList>;

const fetchAuthorRequest = () => (
	action(actionTypes.FETCH_AUTHOR_REQUEST, {})
);

const fetchAuthorSuccess = (author: AuthorModelExtended) => (
	action(actionTypes.FETCH_AUTHOR_SUCCESS, author)
);

const fetchAuthorsListRequest = () => (
	action(actionTypes.FETCH_AUTHORS_LIST_REQUEST, [])
);

const fetchAuthorsListSuccess = (list: AuthorModel[]) => (
	action(actionTypes.FETCH_AUTHORS_LIST_SUCCESS, list)
);

const fetchFailure = (error: Error) => (
	action(actionTypes.FETCH_FAILURE, error)
);

const fetchAuthor: any = (dispatch: Dispatch<RootAction>) => (id: string) => {
	dispatch(fetchAuthorRequest());

	authorService.getAuthor(id)
		.then((data: AuthorModelExtended) => dispatch(fetchAuthorSuccess(data)))
		.catch((error: any) => dispatch(fetchFailure(error)));
};

const fetchAuthorsList: any = (dispatch: Dispatch<RootAction>) => () => {
	dispatch(fetchAuthorsListRequest());

	authorService.getAllAuthors()
		.then((data: AuthorModel[]) => dispatch(fetchAuthorsListSuccess(data)))
		.catch((error: Error) => dispatch(fetchFailure(error)));
};

const switchTheme: any = (theme: string) => {
	const action = {
		type: actionTypes.SWITCH_THEME,
		theme: theme
	};
	store.dispatch(action);
};

const fetchDevelopersListRequest = () => (
	action(actionTypes.FETCH_DEVELOPERS_LIST_REQUEST, [])
);

const fetchDevelopersListSuccess = (list: DeveloperModel[]) => (
	action(actionTypes.FETCH_DEVELOPERS_LIST_SUCCESS, list)
);

const fetchDevelopersList: any = (dispatch: Dispatch<RootAction>) => () => {
	dispatch(fetchDevelopersListRequest());

	developerService.getAllDevelopers()
		.then((data: DeveloperModel[]) => dispatch(fetchDevelopersListSuccess(data)))
		.catch((error: Error) => dispatch(fetchFailure(error)));
};

export {
	fetchAuthor,
	fetchAuthorsList,
	switchTheme,
	actionTypes,
	fetchDevelopersList
};
