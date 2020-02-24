import {action, ActionType} from 'typesafe-actions';

import {Dispatch} from 'redux';

import {AuthorModel, AuthorModelExtended} from '../store/types';

import {AuthorService, IAuthorService} from '../services/authorService';
import store from '../store/store';

// !!! temp decision
const authorService: IAuthorService = new AuthorService();

enum actionTypes {
		FETCH_AUTHORS_LIST_REQUEST = 'FETCH_AUTHORS_LIST_REQUEST',
		FETCH_AUTHORS_LIST_SUCCESS = 'FETCH_AUTHORS_LIST_SUCCESS',

		FETCH_AUTHOR_REQUEST = 'FETCH_AUTHOR_REQUEST',
		FETCH_AUTHOR_SUCCESS = 'FETCH_AUTHOR_SUCCESS',

		SWITCH_THEME = 'SWITCH_THEME'
}

export type RootAction = ActionType<typeof fetchAuthor | typeof fetchAuthorsList | typeof switchTheme>;

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

const fetchAuthor: any = (dispatch: Dispatch<RootAction>) => (id: string) => { // !!!
		dispatch(fetchAuthorRequest());

		authorService.getAuthor(id)
				.then((data: AuthorModelExtended) => dispatch(fetchAuthorSuccess(data)));
};

const fetchAuthorsList: any = (dispatch: Dispatch<RootAction>) => () => { // !!!
		dispatch(fetchAuthorsListRequest());

		authorService.getAllAuthors()
				.then((data: AuthorModel[]) => dispatch(fetchAuthorsListSuccess(data)));
};

const switchTheme: any = (theme: string) => {
		const action = {
				type: actionTypes.SWITCH_THEME,
				theme: theme
		};
		store.dispatch(action);
};

export {
		fetchAuthor,
		fetchAuthorsList,
		switchTheme,
		actionTypes
};
