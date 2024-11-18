import { Pilas } from "../models/Pilas.js";
import { Tipo_de_residuo } from "../models/Tipo_de_residuo.js";
import { Op } from "sequelize";


export const getPilas = async (req, res) => {
  try {
    const pilasAll = await Pilas.findAll({
      attributes: {
        exclude: ["tipo_de_residuo"],
      },
      include: {
        model: Tipo_de_residuo,
        attributes: ["material"],
      },
    });
    res.json(pilasAll);
  } catch (error) {
    return res.status(500).json({ message: error.nessage });
  }
};

export const creatPilas = async (req, res) => {
  try {
    const { estado, dimension } = req.body;
    const tipo = await Tipo_de_residuo.findOne({
      where:{dimension}
    })
    const newPila = await Pilas.create({
      estado,
      tipo_de_residuo: tipo.id_residuos,
    });
    res.json(newPila);
  } catch (error) {
    return res.status(500).json({ message: error.nessage });
  }
};

export const getPila = async (req, res) => {
  try {
    const { id_pilas } = req.params;
    const pila = Pilas.findOne({
      where: { id_pilas },
      attributes: {
        exclude: ["tipo_de_residuo"],
      },
      include: {
        model: Tipo_de_residuo,
        attributes: ["material"],
      },
    });
    res.json(pila);
  } catch (error) {
    return res.status(500).json({ message: error.nessage });
  }
};
