import { AuthorModel, AuthorModelExtended, DeveloperModel } from '../store/types';
import { actionTypes, RootAction } from '../actions';

interface StateModel {
	authorsList: Array<AuthorModel>;
	author: AuthorModelExtended | null;
	isAuthorLoading: boolean;
	isAuthorsListLoading: boolean;
	theme: 'light' | 'dark' | undefined;
	error: Error | null;
	developersList: Array<DeveloperModel>;
	isDevelopersLoading: boolean;
}

const initialState: StateModel = {
	authorsList: [],
	author: null,
	isAuthorsListLoading: true,
	isAuthorLoading: true,
	theme: 'light',
	error: null,
	developersList: [],
	isDevelopersLoading: true
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
		case actionTypes.FETCH_FAILURE:
			return {
				...state,
				isAuthorLoading: false,
				error: action.payload
			};
		case actionTypes.SWITCH_THEME: {
			return {
				...state,
				theme: action.theme
			};
		}
		case actionTypes.FETCH_DEVELOPERS_LIST_REQUEST: {
			return {
				...state,
				isDevelopersLoading: true,
				error: action.payload
			};
		}
		case actionTypes.FETCH_DEVELOPERS_LIST_SUCCESS: {
			return {
				...state,
				isDevelopersLoading: false,
				developersList: action.payload
			};
		}
		default:
			return state;
	}
};
