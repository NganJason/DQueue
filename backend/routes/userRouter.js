import express from "express";
import {
  loginHandler,
  logoutHandler,
  signupHandler,
} from "../handlers/userHandler.js";
var router = express.Router();

router.post("/login", loginHandler);

router.get("/logout", logoutHandler);

router.post("/signup", signupHandler);

export default router;
