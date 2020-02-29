import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { AuthorController } from './controllers/authors-controller';
import { HomeController } from './controllers/home-controller';
import { TeamController } from './controllers/team-controller';
import expressStaticGzip from 'express-static-gzip';

const DIST_DIR = __dirname

export default class AppServer extends Server {

    constructor() {
        super(process.env.NODE_ENV === 'development'); // setting showLogs to true
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        // Setting up middleware for serving gzipped js
        this.setupMiddleware();

        this.setupControllers();
    }

    private setupControllers(): void {
        const authorController = new AuthorController();
        const homeController = new HomeController();
        const teamController = new TeamController();
        super.addControllers([homeController, authorController, teamController]);
    }

    private setupMiddleware() {
        // @ts-ignore
        this.app.use('/bundle.js.br', (req, res, next) => {
            res.set('Content-Encoding', 'br');
            res.setHeader('Content-Type', 'application/javascript');
            next()
        })

        this.app.use("/", expressStaticGzip(DIST_DIR, {
            enableBrotli: true
        }));

    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp('Server listening on port: ' + port);
        })
    }
}
