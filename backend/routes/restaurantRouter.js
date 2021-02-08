import express from "express";
import {
  getQueueListHandler,
  registerHandler,
  retrieveHandler,
} from "../handlers/restaurantHandler.js";

const restaurantRouter = express.Router();

restaurantRouter.post("/register", registerHandler);
restaurantRouter.get("/retrieve", retrieveHandler);
restaurantRouter.get("/queueList", getQueueListHandler);

export default restaurantRouter;
