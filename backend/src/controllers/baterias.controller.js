import { Baterias } from "../models/bateria.js";
import { Tipo_de_residuo } from "../models/Tipo_de_residuo.js";
import { Op } from "sequelize";

export const getBaterias = async (req, res) => {
  try {
    const BateriasAll = await Baterias.findAll({
      attributes: {
        exclude: ["tipo_de_residuo"],
      },
      include: {
        model: Tipo_de_residuo,
        attributes: ["material"],
      },
    });
    res.json(BateriasAll);
  } catch (error) {
    return res.status(500).json({ message: error.nessage });
  }
};

export const creatBaterias = async (req, res) => {
  try {
    const { estado, tipo_de_residuo } = req.body;
    const newBateria = await Baterias.create({
      estado,
      tipo_de_residuo,
    });
    res.json(newBateria);
  } catch (error) {
    return res.status(500).json({ message: error.nessage });
  }
};

export const getBateria = async (req, res) => {
  try {
    const { id_baterias } = req.params;
    const Bateria = Baterias.findOne({
      where: { id_baterias },
      attributes: {
        exclude: ["tipo_de_residuo"],
      },
      include: {
        model: Tipo_de_residuo,
        attributes: ["material"],
      },
    });
    res.json(Bateria);
  } catch (error) {
    return res.status(500).json({ message: error.nessage });
  }
};
