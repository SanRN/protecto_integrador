import { Router } from "express";
import {getEstadisticaE, estadisticaP, estadisticaZ} from "../controllers/estadistica.controller.js"

const router = Router();

router.get("/estadistica/encuesta",getEstadisticaE);
router.get("/estadistica/pilas", estadisticaP);
router.get("/esadistica/zona", estadisticaZ);

export default router;