import { DeveloperModel } from '../store/types';

interface IDeveloperService {
	getAllDevelopers: () => Promise<DeveloperModel[]>;
}

class DeveloperService implements IDeveloperService {
	getAllDevelopers() {
		return fetch('/api/developers')
			.then(res => res.json())
			.catch(err => console.log(err));
	}
}

export{
	DeveloperService,
	IDeveloperService
}
