import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import path from 'path';

const DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, 'index.html');

@Controller('/')
export class HomeController {

    @Get('')
    // @ts-ignore
    private get(req: Request, res: Response) {
        res.setHeader('Content-Type', 'text/html');
        res.sendFile(HTML_FILE);
    }

}
