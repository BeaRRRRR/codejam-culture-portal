import Work from '../model/work';
import AssetService from '../service/asset-service';
import fetch from 'node-fetch';

export default class WorkRepository {
    private baseUrl: string = 'https://cdn.contentful.com/spaces/i57hw1s2rtk6/environments/master/';
    private assetService: AssetService = new AssetService();

    public async getById(id: string): Promise<Work> {
        const url: string = `${this.baseUrl}entries/${id}?access_token=y_EIiiBcV8w0KVCP0kXbt50L85Ot3GjPRr_pR0yxivQ`
        const response = await fetch(url);
        const json = await response.json();
        const imageUrl: string = await this.assetService.getUrlById(json.fields.image.sys.id);
        const work: Work = {
            creationDate: json.fields.creationDate.split('-')[0] || 'unknow',
            title: json.fields.summary,
            place: {
                lat: json.fields.place.lat,
                lon: json.fields.place.lon
            },
            imageUrl
        }
        return work;
    }
}
