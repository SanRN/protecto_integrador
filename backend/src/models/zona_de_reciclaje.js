import { DataTypes } from "sequelize";
import { dataBase } from "./../config/dataBase.js";


export const Zona_de_reciclaje = dataBase.define("Zona_de_reciclaje",{
    id_zona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cor_x: {
        type: DataTypes.STRING(),
        unique: true,
    },
    cor_y: {
        type: DataTypes.STRING(),
        unique: true,
    },
},
{
    timestamps: false,
});