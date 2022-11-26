import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";

interface IAdmin {
    id: number,
    // name: string,
    // surname: string,
    email: string,
    login: string,
    password: string,
    role: "ADMIN" | "AUTHOR" | "SUPERADMIN";
    managed_events_ids: number[],
}

const Admin = sequelize.define<Model<IAdmin>>("Admin", {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM("ADMIN", "AUTHOR", "SUPERADMIN")
    },
    managed_events_ids: {
        type: DataTypes.ARRAY(DataTypes.NUMBER)
    }
})

export { Admin }