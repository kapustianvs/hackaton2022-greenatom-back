import express, { Request, Response } from 'express'
import { Stand } from './models/stands/stands.model';
import { sequelize } from './database';
import bodyParser from 'body-parser';
import { createSurvey, getSurvey, survey14DaysStatistics } from './models/surveys/survey.controller';
import { authenticateToken, generateAccessToken } from './utils/jwt';
import { createStand, editStand, getAllStands } from './models/stands/stands.controller';
import { viewSurveys } from "./models/surveys/survey.controller"

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const _syncronizeDatabase = async () => {

    try {
        await sequelize.sync({ force: true })
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

app.get('/stands', authenticateToken, getAllStands)

app.post('/stands', authenticateToken, createStand)

app.get("/stands/:id", authenticateToken, editStand)

app.post('/authenticate', (req, res) => {
    if (req.body.username) {
        const token = generateAccessToken(req.body.username);
        res.json(token);
    } else {
        res.status(500).send()
    }
})

app.post("/participate", createSurvey)

app.get('/surveys/stats', authenticateToken, survey14DaysStatistics)
app.get("/surveys", authenticateToken, viewSurveys)
app.get("/surveys/:id", authenticateToken, getSurvey)


app.listen(3000, '10.131.56.252', () => {
    console.log("Server has started succesfully")

})
