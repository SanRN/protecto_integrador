import { DataTypes } from "sequelize";
import { dataBase } from "./../config/dataBase.js";


export const Respuestas = dataBase.define("Repuestas", {
  id_respuesta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  respuesta: {
    type: DataTypes.BOOLEAN(),
  },
});

