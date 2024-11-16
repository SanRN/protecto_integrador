import { Router } from "express";
import {
  getPilas,
  creatPilas,
  getPila,
} from "../controllers/pilas.controllers.js";

const router = Router();

router.get("/viewPilas", getPilas);
router.post("/addPilas", creatPilas);
router.put("/updatePilas/id");
router.delete("/deletePilas/id");
router.get("/viewPilas/:id_pilas", getPila);

export default router;
