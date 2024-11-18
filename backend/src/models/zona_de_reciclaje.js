import { DataTypes } from "sequelize";
import { dataBase } from "../config/dataBase.js";

export const Zona_de_reciclaje = dataBase.define(
  "Zona_de_reciclaje",
  {
    id_zona: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING(),
    },
    latitude: {
      type: DataTypes.FLOAT(),
    },
    longitude: {
      type: DataTypes.FLOAT(),
    },
    advertencia:{
      type: DataTypes.BOOLEAN(),
    }
  },
  {
    timestamps: false,
  }
);
