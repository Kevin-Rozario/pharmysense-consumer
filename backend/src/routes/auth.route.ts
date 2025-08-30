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
import validateMiddleware from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.route("/register").post(validateMiddleware(registerSchema), register);
router.route("/login").post(validateMiddleware(loginSchema), login);
router.route("/logout").post(authenticateMiddleware, logout);
router.route("/refresh").post(authenticateMiddleware, renewTokens);
router.route("/google/login").get(googleLogin);
router.route("/google/callback").get(googleCallback);

export default router;
