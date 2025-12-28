import express from "express";
import { upload } from "../middlewares/upload.js";
import { adminAuth } from "../middlewares/auth.js";
import {
  uploadFile,
  getFiles,
  modifyFile,
  downloadFile
} from "../controllers/file.controller.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
router.get("/files", adminAuth, getFiles);
router.post("/modify/:id", adminAuth, modifyFile);
router.get("/download/:id", downloadFile);

export default router;
