import { DataTypes } from "sequelize";
import { dataBase } from "./../config/dataBase.js";

export const Pilas = dataBase.define(
    "Pilas",
    {
      id_pilas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado :{
        type: DataTypes.BOOLEAN(),
        allowNull: false
      }
    },
  );