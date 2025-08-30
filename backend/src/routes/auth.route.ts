import { Router } from "express";
import {
  register,
  login,
  logout,
  renewTokens,
  googleLogin,
  googleCallback,
} from "../controllers/auth.controller.js";
import authenticateMiddleware from "../middlewares/authenticate.middleware.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(authenticateMiddleware, logout);
router.route("/refresh").post(authenticateMiddleware, renewTokens);
router.route("/google/login").get(googleLogin);
router.route("/google/callback").get(googleCallback);

export default router;
