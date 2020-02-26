import { OK, BAD_REQUEST } from 'http-status-codes';
import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import TeamService from '../service/team-service';

@Controller('api/team')
export class TeamController {

    private readonly teamService: TeamService = new TeamService();

    @Get('')
    // @ts-ignore
    async private getAll(req: Request, res: Response) {
        try {
            const team = await this.teamService.getAll();
            return res.status(OK).json(team);
        } catch (err) {
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

}
