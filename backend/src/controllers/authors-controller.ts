import { OK, BAD_REQUEST } from 'http-status-codes';
import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Logger } from '@overnightjs/logger';
import AuthorService from '../service/author-service';



@Controller('api/authors')
export class AuthorController {

    private authorService = new AuthorService();

    @Get(':id')
    // @ts-ignore
    async private get(req: Request, res: Response) {
        try {
            const author = await this.authorService.getById(req.params.id);
            return res.status(OK).json(author);
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    @Get('')
    // @ts-ignore
    async private getAll(req: Request, res: Response) {
        try {
            const authors = await this.authorService.getAll();
            return res.status(OK).json(authors);
        } catch (err) {
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

}
