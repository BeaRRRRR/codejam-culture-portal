import { StateType, ActionType } from "typesafe-actions";
import { rootReducer } from "../reducers";

export type ReducerState = StateType<typeof rootReducer>;
export type RootAction = ActionType<typeof import("../actions/index")>;
