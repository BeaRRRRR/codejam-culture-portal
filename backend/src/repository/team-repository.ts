import Developer from '../model/developer';
import fetch from 'node-fetch';
import AssetService from '../service/asset-service';

export default class TeamRepository {
    private baseUrl: string = 'https://cdn.contentful.com/spaces/i57hw1s2rtk6/environments/master/';
    private assetService: AssetService = new AssetService();

    public async getAll(): Promise<Developer[]> {
        const response = await fetch(`${this.baseUrl}entries?access_token=y_EIiiBcV8w0KVCP0kXbt50L85Ot3GjPRr_pR0yxivQ&content_type=developer`);
        const json = await response.json();
        let items = json.items;
        // @ts-ignore
        items = await Promise.all(items.map(async ({ fields }) => {
            const imageUrl = await this.assetService.getUrlById(fields.imageUrl.sys.id);
            const newDeveloper: Developer = {
                name: fields.name,
                githubUrl: fields.linkToGithub,
                imageUrl,
                contribution: fields.contribution
            }
            return newDeveloper;
        }))
        return items;
    }
}
