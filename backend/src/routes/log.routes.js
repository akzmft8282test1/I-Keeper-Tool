import express from "express";
import { adminAuth } from "../middlewares/auth.js";
import { getLogs } from "../controllers/log.controller.js";

const router = express.Router();

router.get("/", adminAuth, getLogs);

export default router;
