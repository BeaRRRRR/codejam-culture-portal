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

export interface AuthorModelExtended {
	id: string;
	pictureUrl: string;
	name: string;
	birthdate: string;
	deathDate: string;
	birthPlace: string;
	summary: string;
	works: Work[];
	lifeEvents: LifeEvent[];
}

interface Work {
	creationDate: string;
	title: string;
	place: { lat: number; lon: number };
	imageUrl: string;
}

interface LifeEvent {
	eventDate: string;
	summary: string;
}
