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
  checkAuthHandler,
} from "../handlers/userHandler.js";
import { isAuthenticated } from "../middleware/auth.js";
var userRouter = express.Router();

// Auth
userRouter.get("/checkAuth", isAuthenticated, checkAuthHandler);
userRouter.get("/logout", logoutHandler);
userRouter.get("/private-test", isAuthenticated, privateHandler);

userRouter.post("/forgotPassword", forgotPasswordHandler);
userRouter.post("/login", loginHandler);
userRouter.post("/signup", signupHandler);
userRouter.post("/resetPassword/:signedToken", resetPassword);

// Queue
userRouter.get("/queueNum", getQueueNumHandler);
userRouter.post("/enterQueue", enterQueueHandler);

export default userRouter;
