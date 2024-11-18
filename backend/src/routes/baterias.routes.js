import { Router } from "express";
import {
  getBateria,
  getBaterias,
  creatBaterias,
} from "./../controllers/baterias.controller.js";

const router = Router();

router.get("/viewBaterias", getBaterias);
router.post("/addBaterias", creatBaterias);
router.put("/updateBaterias/id");
router.delete("/deleteBaterias/id");
router.get("/viewBaterias/:id_baterias", getBateria);

export default router;
