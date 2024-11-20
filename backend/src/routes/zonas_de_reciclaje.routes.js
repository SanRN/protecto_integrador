import { Router } from "express";
import {
  getZonas,
  creatZona,
  updateZona,
  getZona,
  getZoneFlase
} from "../controllers/zona.controller.js";
const router = Router();

router.get("/viewZona", getZonas);
router.get("/viewZonaF", getZoneFlase);
router.post("/addZona", creatZona);
router.put("/updateZona/:id_zona", updateZona);
router.put("/updateZona/name/:name", updateZona);
router.delete("/deleteZona/id");
router.get("/viewZona/:id_zona", getZona);
router.get("/viewZona/name/:name", getZona);

export default router;
