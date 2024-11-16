import { Sequelize } from "sequelize";
import 'dotenv/config'

export const dataBase = new Sequelize("bateriasDatabase", "postgres", "hola", {
    host: "localhost", 
    dialect:"postgres",
})