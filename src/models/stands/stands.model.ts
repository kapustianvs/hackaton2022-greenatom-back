import { DataTypes, Model } from "sequelize";
import { CreateReplOptions } from "ts-node";
import { sequelize } from "../../database";

interface IStand {
    id?: number,
    title: string,
    
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

export { Stand }