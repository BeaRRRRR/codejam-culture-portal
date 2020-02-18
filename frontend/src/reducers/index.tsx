import { RootAction, AuthorModel } from "../store/types";
import { actionTypes } from "../actions";

interface StateModel {
	authorsList: Array<AuthorModel>;
	author: AuthorModel | null;
}

export const initialState: StateModel = {
	authorsList: [],
	author: null
};

export const rootReducer = (
	state: StateModel = initialState,
	action: RootAction
) => {
	switch (action.type) {
		case actionTypes.FETCH_AUTHORS_LIST:
			return {
				...state,
				authorsList: action.payload
			};
		case actionTypes.FETCH_AUTHOR:
			return {
				...state,
				author: action.payload
			};
		default:
			return state;
	}
};
