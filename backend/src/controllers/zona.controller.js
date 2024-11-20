import { Zona_de_reciclaje } from "../models/zona_de_reciclaje.js";
import { Tipo_de_residuo } from "../models/Tipo_de_residuo.js";
import { Op } from "sequelize";
import { Pilas } from "../models/Pilas.js";

export const getZonas = async (req, res) => {
  try {
    const zonaAll = await Zona_de_reciclaje.findAll({
      attributes: {
        exclude: ["tipo_de_residuo"],
      },
      include: {
        model: Tipo_de_residuo,
        attributes: ["material"],
      },
    });
    res.json(zonaAll);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const creatZona = async (req, res) => {
  try {
    const { name, cor_x, cor_y } = req.body;
    const newZona = await Zona_de_reciclaje.create({
      name,
      cor_x,
      cor_y,
      estado: false,
    });
    res.json(newZona);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateZona = async (req, res) => {
  const { id_zona, name } = req.params;
  const { nameZona, cor_x, cor_y } = req.body;
  let zona;
  try {
    if (id_zona) {
      zona = await Zona_de_reciclaje.findOne({
        where: { id_zona },
      });
    } else if (name) {
      zona = await Zona_de_reciclaje.findOne({
        where: { name },
      });
    }
    zona.name = nameZona ?? zona.name;
    zona.cor_x = cor_x ?? zona.cor_x;
    zona.cor_y = cor_y ?? zona.cor_y;
    await zona.save();
    res.json(zona);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getZona = async (req, res) => {
  const { id_zona, name } = req.params;
  let zona;
  try {
    if (id_zona) {
      zona = await Zona_de_reciclaje.findAll({
        where: { id_zona },
        attributes: {
          exclude: ["tipo_de_residuo"],
        },
        include: {
          model: Tipo_de_residuo,
          attributes: ["material"],
        },
      });
    } else if (name) {
      zona = await Zona_de_reciclaje.findAll({
        where: { name },
        attributes: {
          exclude: ["tipo_de_residuo"],
        },
        include: {
          model: Tipo_de_residuo,
          attributes: ["material"],
        },
      });
    }

    res.json(zona);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const countZone = async (zona) => {
  try {
    // Contar las pilas relacionadas con la zona
    const count = await Pilas.count({
      where: { zona: zona },
    });

    // Si hay 3 pilas, actualizar el estado de la zona
    if (count === 3) {
      const zonaEstado = await Zona_de_reciclaje.findOne({
        where: { id_zona: zona },
      });

      // Validar que la zona exista
      if (zonaEstado) {
        zonaEstado.estado = true; // Actualizar el estado
        await zonaEstado.save(); // Guardar cambios en la BD
      } else {
        console.log(error.message);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getZoneFlase = async (req, res) => {
  try {
    const zonaFlase = await Zona_de_reciclaje.findAll({
      where: { estado: false },
      attributes: {
        exclude: ["latitude", "longitude", "advertencia", "estado", "tipo_de_residuo"],
      },
    });
    res.json(zonaFlase);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
