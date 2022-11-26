import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'greenatom.db.sqlite',
    username: 'root',
    password: 'rootroot',
    logging: false
})

export { sequelize }