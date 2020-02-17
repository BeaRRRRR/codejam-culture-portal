import Work from './work';
import LifeEvent from './life-event';

export default interface Author {
    id: string,
    pictureUrl: string,
    name: string,
    birthdate: string,
    deathDate: string,
    birthPlace: string,
    summary: string,
    works: Work[],
    lifeEvents: LifeEvent[]
}

export interface SearchAuthor {
    id: string,
    name: string,
    birthPlace: string,
}
