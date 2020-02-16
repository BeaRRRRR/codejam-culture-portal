const defaultState = {
	authorsList: [],
	author: {}
};

interface State {
	authorsList: [];
	author: {};
	// add other fields
}

const reducer = (state: State, action: object) => {
	switch (action.type) {
		case "FETCH_AUTHORS_LIST":
			return {
				...state,
				authorsList: action.payload
			};
		case "FETCH_AUTHOR":
			return {
				...state,
				author: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
