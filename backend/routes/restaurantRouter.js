import express from "express";
import {
  getQueueListHandler,
  registerHandler,
  retrieveHandler,
  updateQueueStateHandler,
} from "../handlers/restaurantHandler.js";

const restaurantRouter = express.Router();

restaurantRouter.get("/retrieve", retrieveHandler);
restaurantRouter.get("/queueList", getQueueListHandler);
restaurantRouter.post("/register", registerHandler);
restaurantRouter.put("/updateQueueState", updateQueueStateHandler);

export default restaurantRouter;
