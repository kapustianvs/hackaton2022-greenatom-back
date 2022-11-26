import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";
import type { IQuestion } from "./polls.model";

interface IQuiz {
    name: string,
    surname: string,
    email: string,
    phone_number?: number,
    birth_date: Date,
    region?: string,
    skills: string,
    is_referral: Boolean,
    event_info_source?: string,
    company_info_source?: string,
    question: IQuestion[],

}

const Survey = sequelize.define<Model<IQuiz>>("Quizes", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
    },
    birth_date: {
        type: DataTypes.DATE,
    },
    region: {
        type: DataTypes.STRING,
    },
    skills: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    is_referral: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    event_info_source: {
        type: DataTypes.STRING,
    },
    company_info_source: {
        type: DataTypes.STRING,
    },
    question: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,

    },

})

export { Survey }