import { DataTypes } from "sequelize";
import { dataBase } from "./../config/dataBase.js";
import { User } from "./User.js";

export const Rols = dataBase.define(
  "Rols",
  {
    id_rols: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol_name: {
      type: DataTypes.STRING(20),
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

Rols.hasMany(User,{
  foreignKey: "Rols",
  sourceKey: "id_rols",
})

User.belongsTo(Rols,{
  foreignKey: "Rols",
  sourceKey: "id_rols",
})