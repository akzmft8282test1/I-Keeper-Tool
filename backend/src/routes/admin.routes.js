import express from "express";
import { adminAuth } from "../middlewares/auth.js";
import {
  createAdmin,
  deleteAdmin,
  listAdmins
} from "../controllers/admin.controller.js";

const router = express.Router();

router.use(adminAuth);
router.get("/", listAdmins);
router.post("/", createAdmin);
router.delete("/:id", deleteAdmin);

export default router;
