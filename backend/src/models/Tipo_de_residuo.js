import { DataTypes } from "sequelize";
import { Baterias } from "./bateria.js";
import { dataBase } from "./../config/dataBase.js";
import { Pilas } from "./Pilas.js";
import { Zona_de_reciclaje } from "./zona_de_reciclaje.js";

export const Tipo_de_residuo = dataBase.define(
  "Tipo_de_residuo",
  {
    id_residuos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    material: {
      type: DataTypes.STRING(),
      unique: true,
    },
    contaminacion: {
      type: DataTypes.STRING(),
    },
    procedimiento: {
      type: DataTypes.STRING(),
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

Tipo_de_residuo.hasMany(Pilas, {
  foreignKey: "tipo_de_residuo",
  sourceKey: "id_residuos",
});

Pilas.belongsTo(Tipo_de_residuo, {
  foreignKey: "tipo_de_residuo",
  sourceKey: "id_residuos",
});

Tipo_de_residuo.hasMany(Baterias, {
  foreignKey: "tipo_de_residuo",
  sourceKey: "id_residuos",
});

Baterias.belongsTo(Tipo_de_residuo, {
  foreignKey: "tipo_de_residuo",
  sourceKey: "id_residuos",
});

Tipo_de_residuo.hasMany(Zona_de_reciclaje, {
  foreignKey: "tipo_de_residuo",
  sourceKey: "id_residuos",
});

Zona_de_reciclaje.belongsTo(Tipo_de_residuo, {
  foreignKey: "tipo_de_residuo",
  sourceKey: "id_residuos",
});