import { Request, Response } from "express";
import { Admin } from "./admin.model";
import { Survey } from "../surveys/surveys.model";

export const viewPolls = async (req: Request, res: Response) => {
    const retrievedQuizes = Survey.findAll({ where: { ...req.body } })
    try {
        res.status(200).send(retrievedQuizes)
    } catch (err) {
        res.status(404).send(err)
    }
}