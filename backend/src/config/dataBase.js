import { Sequelize } from "sequelize";
import 'dotenv/config'

const dataBase = new Sequelize(process.env.dataBase, process.env.user, process.env.password, {
    host: process.env.host, 
    dialect:"postgres",
})