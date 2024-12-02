import { DataTypes } from "sequelize";
import { dataBase } from "./../config/dataBase.js";
import { Encuesta } from "./Encuesta.js";

export const User = dataBase.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING(),
      unique: true,
    },
    poswarrd: {
      type: DataTypes.STRING(),
      unique: true,
    },
    email: {
      type: DataTypes.STRING(),
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Encuesta, {
  foreignKey: "users",
  sourceKey: "id",
});

Encuesta.belongsTo(User, {
  foreignKey: "users",
  sourceKey: "id",
});
