import { Encuesta } from "../models/Encuesta.js";
import { Op } from "sequelize";
import { User } from "../models/User.js"

export const createEncuesta = async (req, res) => {
  try {
    const { Pregunta_1, Pregunta_2, Pregunta_3, email } = req.body;
    const user = await User.findOne({
      where:{
        email
      }
    })
    const newEncuesta = await Encuesta.create({
      Pregunta_1,
      Pregunta_2,
      Pregunta_3,
      users: user.id,
    });
    res.json(newEncuesta);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEncuesta = async (req,res) => {
  try{
    const EncuestaAll = await Encuesta.findAll()
    res.json(EncuestaAll);
  }catch (error){
    res.status(500).json({message: error.message});
  }
}
