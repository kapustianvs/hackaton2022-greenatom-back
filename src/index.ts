import express, { Request, Response } from 'express'
import { Stand } from './models/stands/stands.model';
import { sequelize } from './database';
import bodyParser from 'body-parser';
import { createSurvey } from './models/surveys/survey.controller';
import { authenticateToken, generateAccessToken } from './utils/jwt';
import { createStand, editStand, getAllStands } from './models/stands/stands.controller';
import { viewPolls } from "./models/admin/admin.controller"

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const _syncronizeDatabase = async () => {

    try {
        await sequelize.sync({ alter: true })
        // Stand.bulkCreate([{ title: 'Test1', "organiser_id": 1, "parent_event_id": 1 }])
        console.log("Database has been syncronized succesfully");
    }
    catch (err) {
        console.error("Failed to sycronize database", err);
    }
};

_syncronizeDatabase();

app.get("/", async (_, res) => {
    try {
        const stands = await Stand.findAll()
        res.status(200);
        res.send(stands)
    } catch {
        console.log("Server error");
        res.status(500)
    }
})

app.get('/stands', getAllStands)

app.post('/stand', authenticateToken, createStand)

app.post('/authenticate', (req, res) => {
    if (req.body.username) {
        const token = generateAccessToken(req.body.username);
        res.json(token);
    } else {
        res.status(500).send()
    }
})

app.post("/participate", createSurvey)

app.get("/viewPolls", authenticateToken, viewPolls)

app.get("/stand/:id", authenticateToken, editStand)

app.listen(3000, '10.131.56.252', () => {
    console.log("Server has started succesfully")

})