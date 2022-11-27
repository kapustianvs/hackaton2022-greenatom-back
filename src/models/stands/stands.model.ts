import { ISurvey, Survey } from "../surveys/surveys.model";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";

interface IStand {
    id?: number,
    title: string,
    // survey: any[]
    // description: string,
}

const Stand = sequelize.define<Model<IStand>>("Stand", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // description: {
    //     type: DataTypes.STRING
    // },
})
Stand.hasMany(Survey)

export { Stand }