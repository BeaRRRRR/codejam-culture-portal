import AuthorRepository from '../repository/author-repository';
import Author, { SearchAuthor } from '../model/author';
import getRandomNumber from '../util/getRandomNumber';

export default class AuthorService {
    private authorRepository: AuthorRepository = new AuthorRepository();

    public async getById(id: string): Promise<Author> {
        const author: Author = await this.authorRepository.getById(id);
        return author;
    }

    public async getRandom(): Promise<Author> {
        const searchAuthors: SearchAuthor[] = await this.authorRepository.getAll();
        const id: string = searchAuthors[getRandomNumber(searchAuthors.length)].id;
        return this.getById(id);
    }

    public async getAll(): Promise<SearchAuthor[]> {
        const searchAuthors: SearchAuthor[] = await this.authorRepository.getAll();
        return searchAuthors;
    }
}
