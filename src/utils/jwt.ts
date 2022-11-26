import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv"

dotenv.config();

function generateAccessToken(username: string) {
    const token = process.env.TOKEN_SECRET!
    return jwt.sign({ name: username }, token, { expiresIn: '12h' });

}

const authenticateToken = (req: Request, res: Response, next: any) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        if (err) return res.sendStatus(403)
        // req.user = user

        next()
    })
}

export { generateAccessToken, authenticateToken }
