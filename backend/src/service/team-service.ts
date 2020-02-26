import Developer from '../model/developer';
import TeamRepository from '../repository/team-repository';

export default class TeamService {
    private readonly teamRepository: TeamRepository = new TeamRepository();

    public async getAll(): Promise<Developer[]> {
        return this.teamRepository.getAll();
    }
}
