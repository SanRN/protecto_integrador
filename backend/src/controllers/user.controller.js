import { User } from "../models/User.js";
import { Op } from "sequelize";

export const getUsers = async(req, res) =>{

}

export const creatUser = async(req, res) =>{
    
}

export const updateUser = async(req, res) =>{
    
}

export const login = async(req, res) =>{
    const { user_name, poswarrd } = req.body;
  try {
    const admin = await User.findOne({ where: { user_name, poswarrd } });

    if (admin) {
      res.status(200).json({ message: "Usuario autenticado" });
    } else {
      res.status(401).json({ error: "Credenciales incorrectas" });
    }
  } catch (error) {
    console.error("Error al autenticar usuario:", error);
    res.status(500).send("Error interno del servidor");
  }
}

export const getUser = async(req, res) =>{
    
}