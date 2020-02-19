import { action } from "typesafe-actions";

import { AuthorModel, AuthorModelExtended } from "../store/types";

export enum actionTypes {
	FETCH_AUTHORS_LIST = "FETCH_AUTHORS_LIST",
	FETCH_AUTHOR = "FETCH_AUTHOR"
}

export const authorActions = {
	fetchAuthorsList: (list: AuthorModel[]) =>
		action(actionTypes.FETCH_AUTHORS_LIST, list),
	fetchAuthor: (author: AuthorModelExtended) =>
		action(actionTypes.FETCH_AUTHOR, author)
};
