import { RootAction, AuthorModel } from '../store/types';
import { actionTypes } from '../actions';

interface StateModel {
	authorsList: Array<AuthorModel>;
	author: AuthorModel | null;
}

const initialState: StateModel = {
	authorsList: [],
	author: null
};

export const rootReducer = (
	state: StateModel = initialState,
	action: RootAction
) => {
	switch (action.type) {
		case actionTypes.FETCH_AUTHORS_LIST_REQUEST:
			return {
				...state,
				authorsList: action.payload,
				isAuthorsListLoading: true
			};
		case actionTypes.FETCH_AUTHORS_LIST_SUCCESS:
			return {
				...state,
				authorsList: action.payload,
				isAuthorsListLoading: false
			};
		case actionTypes.FETCH_AUTHOR_REQUEST:
			return {
				...state,
				author: action.payload,
				isAuthorLoading: true
			};
		case actionTypes.FETCH_AUTHOR_SUCCESS:
			return {
				...state,
				author: action.payload,
				isAuthorLoading: false
			};
		default:
			return state;
	}
};
