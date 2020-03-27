import Work from '../model/work';
import WorkRepository from '../repository/work-repository';

export default class WorkService {
    private workRepository: WorkRepository = new WorkRepository();

    public async getAllByIds(ids: string[]): Promise<Work[]> {
        return await Promise.all(ids.map(async (id) => await this.workRepository.getById(id)));
    }
}
