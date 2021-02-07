import express from "express";
import {
  loginHandler,
  signupHandler,
  privateHandler,
  forgotPasswordHandler,
  resetPassword,
  logoutHandler,
  checkAuthHandler,
} from "../handlers/userHandler.js";
import { isAuthenticated } from "../middleware/auth.js";
var router = express.Router();

router.get("/checkAuth", isAuthenticated, checkAuthHandler);
router.get("/logout", logoutHandler);
router.get("/private-test", isAuthenticated, privateHandler);

router.post("/signup", signupHandler);
router.post("/forgotPassword", forgotPasswordHandler);
router.post("/resetPassword/:signedToken", resetPassword);

export default router;
