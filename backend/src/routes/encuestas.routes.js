import { Router } from "express";
import {
  createEncuesta
} from "../controllers/encuesta.controller.js";

const router = Router();

router.get("/viewEncuesta/:id_encuesta",);
router.post("/addEncuestas", createEncuesta);

export default router;
