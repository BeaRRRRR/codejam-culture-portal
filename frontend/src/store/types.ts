import { StateType } from 'typesafe-actions';

import { rootReducer } from '../reducers';

export type ReducerState = StateType<typeof rootReducer>;

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
	video: string;
}

export interface Work {
	creationDate: string;
	title: string;
	place: { lat: number; lon: number };
	imageUrl: string;
}

export interface LifeEvent {
	eventDate: string;
	summary: string;
}
