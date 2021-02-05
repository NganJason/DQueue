import express from "express";
import {
  loginHandler,
  signupHandler,
  privateHandler,
  forgotPasswordHandler,
  resetPassword,
  logoutHandler,
} from "../handlers/userHandler.js";
import { isAuthenticated } from "../middleware/auth.js";
var router = express.Router();

router.post("/signup", signupHandler);
router.post("/login", loginHandler);
router.get("/logout", logoutHandler);
router.post("/forgotPassword", forgotPasswordHandler);
router.post("/resetPassword/:signedToken", resetPassword);
router.get("/private-test", isAuthenticated, privateHandler);

export default router;
