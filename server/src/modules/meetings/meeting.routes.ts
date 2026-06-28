import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware";
import { create, getAll, getOne, remove, update } from "./meeting.controller";

const router = Router();

router.post("/", authenticate, create);
router.get("/", authenticate, getAll);
router.get("/:id", authenticate, getOne);
router.delete("/:id", authenticate, remove);
router.patch("/:id", authenticate, update);

export default router;