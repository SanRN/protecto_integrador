import { DataTypes } from "sequelize";
import { dataBase } from "./../config/dataBase.js";

export const Encuesta = dataBase.define("Encuesta", {
  id_encuesta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Pregunta_1: {
    type: DataTypes.STRING(),
  },
  Pregunta_2: {
    type: DataTypes.STRING(),
  },
  Pregunta_3: {
    type: DataTypes.STRING(),
  },
});
