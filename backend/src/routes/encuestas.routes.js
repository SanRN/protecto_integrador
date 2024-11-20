import { Router } from "express";
import {
  getEncuesta,
  createEncuesta,
} from "../controllers/encuesta.controller.js";

const router = Router();

router.get("/viewEncuesta/:id_encuesta", getEncuesta);
router.post("/addEncuestas", createEncuesta);

export default router;
