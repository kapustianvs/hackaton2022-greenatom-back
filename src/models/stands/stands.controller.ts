import { Request, Response } from "express";
import { Stand } from "./stands.model";

export const getAllStands = async (req: Request, res: Response) => {
    try {
        const stands = await Stand.findAll()
        res.status(200).send(stands)
    } catch (err) {

        console.error(err);
        res.send(500)
    }
}

export const createStand = async (req: Request, res: Response) => {
    try {
        const stand = await Stand.create(req.body)
        res.status(200).send(stand)
    } catch (err) {
        console.error(err);
        res.status(500).send(err)
    }
}

export const editStand = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const stand = await Stand.findOne({ where: { id } })
        if (stand) {
            stand.update(req.body)
        } else {
            res.send(404)
        }
        res.status(200).send(stand)
    } catch (err) {
        console.error(err);
        res.status(500).send(err)
    }
}