import { Router } from "express";
import * as userCntroller from "../controllers/user.controller.js";
import { body } from "express-validator";

import * as authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.post(
  "/register",
  body("email").isEmail().withMessage("Email must be a valid email address"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters"),
  userCntroller.createUserCntroller
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Email must be a valid email address"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters"),
  userCntroller.loginController
);

router.get(
  "/profile",
  authMiddleware.authUser,
  userCntroller.profileController
);

router.get("/logout", authMiddleware.authUser, userCntroller.logoutController);

export default router;
