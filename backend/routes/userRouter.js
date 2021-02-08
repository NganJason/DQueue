import express from "express";
import {
  loginHandler,
  signupHandler,
  privateHandler,
  forgotPasswordHandler,
  resetPassword,
  logoutHandler,
  enterQueueHandler,
  getQueueNumHandler,
  queueStateHandler,
} from "../handlers/userHandler.js";
import { isAuthenticated } from "../middleware/auth.js";
var router = express.Router();

// Auth
router.get("/logout", logoutHandler);
router.get("/private-test", isAuthenticated, privateHandler);

router.post("/forgotPassword", forgotPasswordHandler);
router.post("/login", loginHandler);
router.post("/signup", signupHandler);
router.post("/resetPassword/:signedToken", resetPassword);

// Queue
router.get("/queueNum", getQueueNumHandler);
router.post("/enterQueue", enterQueueHandler);
router.put("/updateQueueState", queueStateHandler);

export default router;
