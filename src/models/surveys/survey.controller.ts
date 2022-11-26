import { Request, Response } from "express";
import { where } from "sequelize";
import { Survey } from "./surveys.model";
import Sequelize from "sequelize";


export const createSurvey = async (req: Request, res: Response) => {
    try {
        const stand = await Survey.create(req.body)
        res.status(200).send(stand)
    } catch (err) {
        console.error(err);
        res.status(500).send(err)
    }
}

export const surveyStatisticsSort = async (req: Request, res: Response) => {
    try {
        const statistics = await Survey.findAll({ where: { ...req.body } })
        res.status(200).send(statistics)
    } catch (err) {
        res.status(404).send(err)
    }
}

export const surveyStatisticsDays = async (req: Request, res: Response) => {
    try {
        const currentDate = new Date
        const daysStatistic = await Survey.findAll({ where: {} })
    } catch (err) {

    }
}