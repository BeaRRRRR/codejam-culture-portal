import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { AuthorController } from './controllers/authors-controller';
import { HomeController } from './controllers/home-controller';
import { TeamController } from './controllers/team-controller';
import express from 'express';

const DIST_DIR = __dirname

export default class AppServer extends Server {

    constructor() {
        super(process.env.NODE_ENV === 'development'); // setting showLogs to true
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(DIST_DIR));
        this.setupControllers();
    }

    private setupControllers(): void {
        const authorController = new AuthorController();
        const homeController = new HomeController();
        const teamController = new TeamController();
        super.addControllers([homeController, authorController, teamController]);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp('Server listening on port: ' + port);
        })
    }
}
