import { DataTypes } from "sequelize";
import { dataBase } from "./../config/dataBase.js";

export const Baterias = dataBase.define(
    "Baterias",
    {
      id_baterias: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado:{
        type: DataTypes.BOOLEAN(),
        unique: true,
      }
    },
  );