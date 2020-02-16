import { StateType, ActionType } from "typesafe-actions";

export type RootAction = ActionType<typeof import("../actions/index")>;
