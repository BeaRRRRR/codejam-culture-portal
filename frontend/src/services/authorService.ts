class AuthorService {
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

export default AuthorService;
