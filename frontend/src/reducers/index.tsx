import { RootAction, AuthorModel } from "../store/types";
import { actionTypes } from "../actions";

interface StateModel {
	authorsList: Array<AuthorModel>;
	author: AuthorModel;
}

export const initialState: StateModel = {
	authorsList: [
		{ id: "1a", name: "test architect" },
		{ id: "2b", name: "test architect 2" }
	],
	author: { id: "1a", name: "test architect" }
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
