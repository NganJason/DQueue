import express from "express";
import { loginHandler, signupHandler } from "../handlers/userHandler.js";
var router = express.Router();

router.post("/login", loginHandler);

router.post("/signup", signupHandler);

export default router;
