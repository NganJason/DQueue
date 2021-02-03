import express from "express";
import {
  loginHandler,
  signupHandler,
  privateHandler,
  forgotPasswordHandler,
  resetPassword,
} from "../handlers/userHandler.js";
import { isAuthenticated } from "../middleware/auth.js";
var router = express.Router();

router.post("/login", loginHandler);

router.post("/signup", signupHandler);

router.post("/forgotPassword", forgotPasswordHandler);

router.post("/resetPassword", resetPassword);

router.get("/private-test", isAuthenticated, privateHandler);

export default router;
