import { Sequelize } from "sequelize";
import 'dotenv/config'

export const dataBase = new Sequelize("bateriasDatabase", "postgres", "37410", {
    host: "localhost", 
    dialect:"postgres",
})