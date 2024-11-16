import { Router } from "express";
import {
  getEncuesta,
  createEncuesta,
  updateEncuesta,
  getpregunta,
  getpreguntas,
  createPregunta,
  updatePregunta,
  deletePregunta,
  getRespuesta,
  getRespuestas,
  creatRespuesta,
} from "../controllers/encuesta.controllers.js";

const router = Router();

router.get("/viewEncuesta/:id_encuesta", getEncuesta);
router.post("/addEncuestas", createEncuesta);
router.put("/updateEcuestas/:id_encuesta", updateEncuesta);

router.get("/viewPreguntas/:id_pegunta", getpregunta);
router.get("/viewPreguntas", getpreguntas);
router.post("/addEncuestas", createPregunta);
router.put("/updatePreguntas/:id_pegunta", updatePregunta);
router.delete("/deletePreguntas/:id_pegunta", deletePregunta);

router.get("/viewRespuesta/:id_respuesta", getRespuesta);
router.get("/viewRespuesta", getRespuestas);
router.post("/addRespuesta", creatRespuesta);

export default router;
