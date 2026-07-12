import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware";
import upload from "../../middleware/upload.middleware";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
  uploadMeeting,
} from "./meeting.controller";

const router = Router();

router.post("/upload", authenticate, upload.single("audio"), uploadMeeting);
router.post("/", authenticate, create);
router.get("/", authenticate, getAll);
router.get("/:id", authenticate, getOne);
router.delete("/:id", authenticate, remove);
router.patch("/:id", authenticate, update);

export default router;
