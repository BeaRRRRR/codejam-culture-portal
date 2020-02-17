import AssetRepository from '../repository/asset-repository';

export default class AssetService {
    private assetRepository: AssetRepository = new AssetRepository();

    public async getUrlById(id: string): Promise<string> {
        return this.assetRepository.getImageUrlById(id);
    }
}
