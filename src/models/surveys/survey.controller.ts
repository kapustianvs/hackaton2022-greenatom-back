import { Request, Response } from "express";
import { Survey } from "./surveys.model";
import { Op } from "sequelize";

export const createSurvey = async (req: Request, res: Response) => {
    try {
        const stand = await Survey.create(req.body)
        res.status(200).send(stand)
    } catch (err) {
        console.error(err);
        res.status(500).send(err)
    }
}

export const getSurvey = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const survey = await Survey.findOne({ where: { id } })

        return survey ? res.send(survey) : res.send(404)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const survey14DaysStatistics = async (req: Request, res: Response) => {
    // const { from, ...restfilters } = req.body.filters
    const statisticsArr: number[] = [];
    let fromDate = new Date()
    let toDate = new Date();
    fromDate.setDate(fromDate.getDate() - 1);

    const where = { createdAt: { [Op.between]: [fromDate, toDate] } }

    try {
        for (let i = 0; i < 15; i++) {

            const surveys = await Survey.findAll({ where })

            statisticsArr[i] = surveys.length;
            fromDate.setDate(fromDate.getDate() - 1);
            toDate.setDate(toDate.getDate() - 1);
        }

        res.status(200).send(statisticsArr)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const viewSurveys = async (req: Request, res: Response) => {
    const { from, ...restfilters } = req.body.filters

    const myLittleDate = new Date();
    myLittleDate.setDate(myLittleDate.getDate() - 14);

    const where = { ...restfilters }

    if (from) where.createdAt = { [Op.between]: [myLittleDate, new Date()] }

    try {
        const retrievedQuizes = await Survey.findAll({ where })
        res.status(200).send(retrievedQuizes)
    } catch (err) {
        res.status(500).send(JSON.stringify(err))
    }
}