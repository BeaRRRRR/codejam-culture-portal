import LifeEvent from '../model/life-event';
import fetch from 'node-fetch';

export default class LifeEventRepository {
    private baseUrl: string = 'https://cdn.contentful.com/spaces/i57hw1s2rtk6/environments/master/';

    public async getById(id: string) {
        const url: string = `${this.baseUrl}entries/${id}?access_token=y_EIiiBcV8w0KVCP0kXbt50L85Ot3GjPRr_pR0yxivQ`
        const response = await fetch(url);
        const json = await response.json();
        const lifeEvent: LifeEvent = {
            eventDate: json.fields.eventDate || 'unknow',
            summary: json.fields.description
        }
        return lifeEvent;
    }
}
