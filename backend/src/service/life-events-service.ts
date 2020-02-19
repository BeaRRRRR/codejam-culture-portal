import LifeEventRepository from '../repository/life-event-repository';

export default class LifeEventService {
    private lifeEventRepository: LifeEventRepository = new LifeEventRepository();

    public async getAllByIds(ids: string[]) {
        return await Promise.all(ids.map(async id => await this.lifeEventRepository.getById(id)));
    }
}
