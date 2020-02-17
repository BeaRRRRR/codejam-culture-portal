import { StateType, ActionType } from "typesafe-actions";

import { rootReducer } from "../reducers";
import { authorActions } from "../actions";

export type ReducerState = StateType<typeof rootReducer>;
export type RootAction = ActionType<typeof authorActions>;

export interface AuthorModel {
	id: string;
	name: string;
	birthPlace: string;
}
