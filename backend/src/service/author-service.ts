import AuthorRepository from '../repository/author-repository';
import Author, { SearchAuthor } from '../model/author';

export default class AuthorService {
    private authorRepository: AuthorRepository = new AuthorRepository();

    public async getById(id: string): Promise<Author> {
        const author = await this.authorRepository.getById(id);
        return author;
    }

    public async getAll(): Promise<SearchAuthor[]> {
        const searchAuthors: SearchAuthor[] = await this.authorRepository.getAll();
        return searchAuthors;
    }
}
