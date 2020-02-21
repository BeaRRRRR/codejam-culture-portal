import { action } from 'typesafe-actions';

import { Dispatch } from 'redux';

import { AuthorModel, AuthorModelExtended } from '../store/types';

import { IAuthorService } from '../services/authorService';

import { RootAction } from '../store/types';

export enum actionTypes {
	FETCH_AUTHORS_LIST_REQUEST = 'FETCH_AUTHORS_LIST_REQUEST',
	FETCH_AUTHORS_LIST_SUCCESS = 'FETCH_AUTHORS_LIST_SUCCESS',

	FETCH_AUTHOR_REQUEST = 'FETCH_AUTHOR_REQUEST',
	FETCH_AUTHOR_SUCCESS = 'FETCH_AUTHOR_SUCCESS'
}

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

export const authorActions: any = { // !!! fix type
	fetchAuthor: (
		authorService: IAuthorService,
		dispatch: Dispatch<RootAction>
	) => (id: string) => {
		dispatch(fetchAuthorRequest);

		authorService.getAuthor(id)
			.then((data: AuthorModelExtended) => dispatch(fetchAuthorSuccess(data)));
	},

	fetchAuthorsList: (
		authorService: IAuthorService,
		dispatch: Dispatch<RootAction>
	) => () => {
		dispatch(fetchAuthorsListRequest);

		authorService.getAllAuthors()
			.then((data: AuthorModel[]) => dispatch(fetchAuthorsListSuccess(data)))
	}
};
