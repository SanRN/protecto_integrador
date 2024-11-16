import { Router } from "express";
import {
  getUsers,
  creatUser,
  updateUser,
  login,
  getUser,
} from "../controllers/user.contollers.js";
const router = Router();

router.get("/viewUser", getUsers);
router.post("/addUser", creatUser);
router.put("/updateZona/", updateUser);
router.delete("/deleteUser/id");
router.post("/login", login);
router.get("/viewUser/:id", getUser);

export default router;
