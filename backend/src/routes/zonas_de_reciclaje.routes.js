import { Router } from "express";
import {
  getZonas,
  creatZona,
  updateZona,
  getZona,
} from "../controllers/zona.contollers.js";
const router = Router();

router.get("/viewZona", getZonas);
router.post("/addZona", creatZona);
router.put("/updateZona/id_zona", updateZona);
router.delete("/deleteZona/id");
router.get("/viewZona/:id_zona", getZona);

export default router;
