import { Router } from "express";
import {
  createEncuesta, getEncuesta
} from "../controllers/encuesta.controller.js";

const router = Router();

router.get("/viewEncuesta", getEncuesta);
router.post("/addEncuestas", createEncuesta);

export default router;
