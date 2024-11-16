import { DataTypes } from "sequelize";
import { dataBase } from "./../config/dataBase.js";
import { Respuestas } from "./Respuestas.js";

export const Preguntas = dataBase.define(
  "Preguntas",
  {
    id_pegunta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    texto_pregunta: {
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: false,
  }
);

Preguntas.hasMany(Respuestas, {
  foreignKey: "pregunta",
  sourceKey: "id_pegunta",
});

Respuestas.belongsTo(Respuestas, {
  foreignKey: "pregunta",
  sourceKey: "id_pegunta",
});
