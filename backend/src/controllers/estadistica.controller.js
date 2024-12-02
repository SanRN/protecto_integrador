import { Encuesta } from "../models/Encuesta.js";
import { Zona_de_reciclaje } from "../models/zona_de_reciclaje.js";
import { Pilas } from "../models/Pilas.js";
import { json } from "sequelize";
import { dataBase } from "../config/dataBase.js";

export const getEstadisticaE = async (req, res) => {
  try {
    const countTotal = await Encuesta.count();
    const countPreg1_1 = await Encuesta.count({
      where: { Pregunta_1: "menos_5" },
    });
    const countPreg1_2 = await Encuesta.count({
      where: { Pregunta_1: "entre_5_10" },
    });
    const countPreg1_3 = await Encuesta.count({
      where: { Pregunta_1: "entre_21_30" },
    });
    const countPreg1_4 = await Encuesta.count({
      where: { Pregunta_1: "mas_30" },
    });
    const countPreg2_1 = await Encuesta.count({
      where: { Pregunta_2: "si" },
    });
    const countPreg2_2 = await Encuesta.count({
      where: { Pregunta_2: "nose" },
    });
    const countPreg2_3 = await Encuesta.count({
      where: { Pregunta_2: "no" },
    });
    const countPreg2_4 = await Encuesta.count({
      where: { Pregunta_2: "inseguro" },
    });
    const countPreg3_1 = await Encuesta.count({
      where: { Pregunta_3: "tirar" },
    });
    const countPreg3_2 = await Encuesta.count({
      where: { Pregunta_3: "guardar" },
    });
    const countPreg3_3 = await Encuesta.count({
      where: { Pregunta_3: "llevar" },
    });
    const countPreg3_4 = await Encuesta.count({
      where: { Pregunta_3: "no_usar" },
    });
    const totalData = {
      totalEncuestas: countTotal,
      Pregunta_1: {
        Opcion_1: countPreg1_1,
        Opcion_2: countPreg1_2,
        Opcion_3: countPreg1_3,
        Opcion_4: countPreg1_4,
      },
      Pregunta_2: {
        Opcion_1: countPreg2_1,
        Opcion_2: countPreg2_2,
        Opcion_3: countPreg2_3,
        Opcion_4: countPreg2_4,
      },
      Pregunta_3: {
        Opcion_1: countPreg3_1,
        Opcion_2: countPreg3_2,
        Opcion_3: countPreg3_3,
        Opcion_4: countPreg3_4,
      },
    };
    res.json(totalData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const estadisticaP = async (req, res)=> {
    try{
        const countTotal = await Pilas.count();
        const reciclada = await Pilas.count({
            where:{estado:true}
        })
        const decechadas =countTotal -reciclada
        const data={
            totalPilas: countTotal,
            pilasRecicladas: reciclada,
            pilasDesechadas: decechadas
        }
        res.json(data);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const estadisticaZ = async (req, res) =>{
    try{
        const zonas = await Zona_de_reciclaje.count();
        let resultado=[];
        for(let i =1 ; i < zonas; i++){
            const recuento = await Pilas.count({
                where:{zona: i}
            })
            resultado.push({
                id_zona: i,
                recuento: recuento
            })
            console.log(resultado)
        }
        res.json(resultado)
    }catch (error){
        res.status(500).json({message: error.message});
    }
}
