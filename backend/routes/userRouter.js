import express from "express";
import {
  loginHandler,
  signupHandler,
  privateHandler,
  forgotPasswordHandler,
  resetPassword,
  logoutHandler,
  enterQueueHandler,
} from "../handlers/userHandler.js";
import { isAuthenticated } from "../middleware/auth.js";
var router = express.Router();

router.get("/logout", logoutHandler);
router.get("/private-test", isAuthenticated, privateHandler);

router.post("/forgotPassword", forgotPasswordHandler);
router.post("/login", loginHandler);
router.post("/signup", signupHandler);
router.post("/enterQueue", enterQueueHandler);
router.post("/resetPassword/:signedToken", resetPassword);

export default router;
