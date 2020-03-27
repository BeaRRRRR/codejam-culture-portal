import Author, { SearchAuthor } from '../model/author';
import Work from '../model/work';
import LifeEvent from '../model/life-event';
import WorkService from '../service/work-service';
import AssetService from '../service/asset-service';
import LifeEventService from '../service/life-events-service';
import fetch from 'node-fetch';

export default class AuthorRepository {
    private readonly baseUrl: string = 'https://cdn.contentful.com/spaces/i57hw1s2rtk6/environments/master/';
    private readonly access_token: string = 'access_token=y_EIiiBcV8w0KVCP0kXbt50L85Ot3GjPRr_pR0yxivQ';
    private readonly workService: WorkService = new WorkService();
    private readonly assetService: AssetService = new AssetService();
    private readonly lifeEventService: LifeEventService = new LifeEventService();

    public async getById(id: string): Promise<Author> {
        const url = `${this.baseUrl}entries/${id}?${this.access_token}`
        const response = await fetch(url);
        const json = await response.json();
        // @ts-ignore
        const works: Work[] = await this.workService.getAllByIds(json.fields.works.map(link => link.sys.id))
        // @ts-ignore
        const lifeEvents: LifeEvent[] = await this.lifeEventService.getAllByIds(json.fields.lifeEvents.map(link => link.sys.id));
        const pictureUrl = await this.assetService.getUrlById(json.fields.picture.sys.id);
        let author: Author = {
            id: json.sys.id,
            pictureUrl,
            name: json.fields.name,
            birthdate: json.fields.birthDate,
            deathDate: json.fields.deathDate,
            birthPlace: json.fields.birthPlace,
            summary: json.fields.summary,
            works: works,
            lifeEvents
        }
        if (json.fields.video) author = { ...author, videoUrl: json.fields.video }
        return author;
    }

    public async getAll(): Promise<SearchAuthor[]> {
        const url = `${this.baseUrl}entries?${this.access_token}&include=0&content_type=author`
        const response = await fetch(url);
        const json = await response.json();
        // @ts-ignore
        const authors: SearchAuthor[] = json.items.map(item => {
            return {
                id: item.sys.id,
                name: item.fields.name,
                birthPlace: item.fields.birthPlace
            }
        })
        return authors;
    }
}
