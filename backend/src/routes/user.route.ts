import { Router } from "express";
import {
  getProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/user.controller.js";
import authenticateMiddleware from "../middlewares/authenticate.middleware.js";

const router = Router();

router.route("/profile").get(getProfile);
router.route("/update-profile").put(authenticateMiddleware, updateProfile);
router.route("/delete-profile").post(authenticateMiddleware, deleteProfile);

export default router;
