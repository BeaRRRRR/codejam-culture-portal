class AuthorService {
	getAllAuthors() {
		return fetch("http://localhost:3000/api/authors")
			.then(res => res.json())
			.catch(err => console.log(err));
	}
}

export default AuthorService;
