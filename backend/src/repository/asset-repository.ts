import fetch from 'node-fetch';

export default class AssetRepository {
    private baseUrl: string = `https://cdn.contentful.com/spaces/i57hw1s2rtk6/environments/master/assets/`

    public async getImageUrlById(id: string): Promise<string> {
        const url = `${this.baseUrl}${id}?access_token=y_EIiiBcV8w0KVCP0kXbt50L85Ot3GjPRr_pR0yxivQ`;
        const response = await fetch(url);
        const json = await response.json();
        const imageUrl = `https:${json.fields.file.url}`;
        return imageUrl;
    }
}
