import { DataTypes } from "sequelize";
import { dataBase } from "./../config/dataBase.js";
import { Preguntas } from "./Preguntas.js";

export const Encuesta = dataBase.define("Encuesta", {
  id_encuesta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(),
  },
});
Encuesta.hasMany(Preguntas, {
  foreignKey: "encuesta",
  sourceKey: "id_encuesta",
});

Preguntas.belongsTo(Encuesta, {
  foreignKey: "encuesta",
  sourceKey: "id_encuesta",
});
