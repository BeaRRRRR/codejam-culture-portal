import { action } from 'typesafe-actions';

import { AuthorModel, AuthorModelExtended } from '../store/types';

export enum actionTypes {
	FETCH_AUTHORS_LIST_REQUEST = 'FETCH_AUTHORS_LIST_REQUEST',
	FETCH_AUTHORS_LIST_SUCCESS = 'FETCH_AUTHORS_LIST_SUCCESS',

	FETCH_AUTHOR_REQUEST = 'FETCH_AUTHOR_REQUEST',
	FETCH_AUTHOR_SUCCESS = 'FETCH_AUTHOR_SUCCESS'
}

export const authorActions = {
	fetchAuthorsListRequest: () => (
		action(actionTypes.FETCH_AUTHORS_LIST_REQUEST, [])
	),
	fetchAuthorsListSuccess: (list: AuthorModel[]) => (
		action(actionTypes.FETCH_AUTHORS_LIST_SUCCESS, list)
	),

	fetchAuthorRequest: () => (
		action(actionTypes.FETCH_AUTHOR_REQUEST, {})
	),
	fetchAuthorSuccess: (author: AuthorModelExtended) => (
		action(actionTypes.FETCH_AUTHOR_SUCCESS, author)
	)
};
