import { User } from "../models/User.js";
import { Op } from "sequelize";

export const getUsers = async (req, res) => {};

export const creatUser = async (req, res) => {};

export const updateUser = async (req, res) => {
  const { user_name, poswarrd, email } = req.body;
  try {
    const users = await User.findOne({
      where: { email },
    });
    users.user_name = user_name ?? User.user_name;
    users.poswarrd = poswarrd ?? users.poswarrd;
    await users.save();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, poswarrd } = req.body;
  try {
    const admin = await User.findOne({ where: { email } });
    if(!admin){
      return res.status(404).json({ message: "usuario no encontrado" });
    };
    if (admin.poswarrd === poswarrd) {
      res.status(200).json({ message: "Usuario autenticado" });
    } else {
      res.status(401).json({ error: "contraseña incorrecta" });
    }
  } catch (error) {
    console.error("Error al autenticar usuario:", error);

    res.status(500).send("Error interno del servidor");
  }
};

export const getUser = async (req, res) => {};
