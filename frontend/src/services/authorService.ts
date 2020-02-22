import { AuthorModel, AuthorModelExtended } from '../store/types';

interface IAuthorService {
	getAllAuthors: () => Promise<AuthorModel[]>;
	getAuthor: (id: string) => Promise<AuthorModelExtended>;
}

class AuthorService implements IAuthorService {
	getAllAuthors() {
		return fetch('/api/authors')
			.then(res => res.json())
			.catch(err => console.log(err));
	}

	getAuthor(id: string) {
		return fetch(`/api/authors/${id}`)
			.then(res => res.json())
			.catch(err => console.log(err));
	}
}

export {
	AuthorService,
	IAuthorService
};
