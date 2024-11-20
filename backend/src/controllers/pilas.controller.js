import { Pilas } from "../models/Pilas.js";
import { Tipo_de_residuo } from "../models/Tipo_de_residuo.js";
import { Op } from "sequelize";
import { Zona_de_reciclaje } from "../models/zona_de_reciclaje.js";
import { countZone } from "./zona.controller.js";

export const getPilas = async (req, res) => {
  try {
    const pilasAll = await Pilas.findAll({
      attributes: {
        exclude: ["tipo_de_residuo"],
      },
      include: {
        model: Tipo_de_residuo,
        attributes: ["dimension", "material"],
      },
    });
    res.json(pilasAll);
  } catch (error) {
    return res.status(500).json({ message: error.nessage });
  }
};

export const creatPilas = async (req, res) => {
  let newPila;
  try {
    const { estado, dimension, zona } = req.body;
    const tipo = await Tipo_de_residuo.findOne({
      where: { dimension },
    });
    const zonaR = await Zona_de_reciclaje.findOne({
      where: { id_zona: zona },
    });
    if (zonaR.tipo_de_residuo === tipo.id_residuos) {
      if (estado) {
        newPila = await Pilas.create({
          tipo_de_residuo: tipo.id_residuos,
          estado,
          zona: 0,
        });
      } else {
        if ((await Pilas.count({ where: { zona } })) > 2) {
          res.status(500).json({ message: "la zona" + zona + " esta llena" });
        } else {
          console.log(await Pilas.count({ where: { zona } }));
          newPila = await Pilas.create({
            tipo_de_residuo: tipo.id_residuos,
            estado,
            zona,
          });
          countZone(zona);
        }
      }
      res.json(newPila);
    }else{
      res.status(500).json({ message: "En la zona " + zona + " no es para materiales "+ dimension });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
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
