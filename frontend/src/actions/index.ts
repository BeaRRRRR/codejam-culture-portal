import { action } from "typesafe-actions";

export enum actionTypes {
	FETCH_AUTHORS_LIST = "FETCH_AUTHORS_LIST",
	FETCH_AUTHOR = "FETCH_AUTHOR"
}

type AuthorType = {
	id: string;
	name: string;
	// add other fields
};

export const authorActions = {
	fetchAuthorsList: (list: AuthorType[]) =>
		action(actionTypes.FETCH_AUTHORS_LIST, list),
	fetchAuthor: (author: AuthorType) => action(actionTypes.FETCH_AUTHOR, author)
};
