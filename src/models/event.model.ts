import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";


interface IEvent {
    id: number
    title: string,
    creation_date: Date,
    start_date: Date,
    description: string,
    organiser_id: number,
}

const Event = sequelize.define<Model<IEvent>>("Event", {
    id: {
        type: DataTypes.NUMBER,
    },
    title: {
        type: DataTypes.STRING,
    },
    creation_date: {
        type: DataTypes.DATE,
    },
    start_date: {
        type: DataTypes.DATE,
    },
    description: {
        type: DataTypes.STRING
    },
    organiser_id: {
        type: DataTypes.NUMBER
    }
})

export { Event }