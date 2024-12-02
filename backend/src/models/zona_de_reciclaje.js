import { DataTypes } from "sequelize";
import { dataBase } from "../config/dataBase.js";
import { Baterias } from "./bateria.js";
import { Pilas } from "./Pilas.js";

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
    },
    estado:{
      type:DataTypes.BOOLEAN,
      allowNull: false

    }

  },
  {
    timestamps: false,
  }
);

Zona_de_reciclaje.hasMany(Pilas,{
  foreignKey: "zona",
  sourceKey: "id_zona",
})

Pilas.belongsTo(Zona_de_reciclaje,{
  foreignKey: "zona",
  sourceKey: "id_zona",
})

Zona_de_reciclaje.hasMany(Baterias,{
  foreignKey: "zona",
  sourceKey: "id_zona",
})

Baterias.belongsTo(Zona_de_reciclaje,{
  foreignKey: "zona",
  sourceKey: "id_zona",
})
