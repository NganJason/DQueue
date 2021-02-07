import express from "express";
import {registerHandler, retrieveHandler} from "../handlers/restaurantHandler.js";


const restaurantRouter = express.Router();

restaurantRouter.post("/register", registerHandler);
restaurantRouter.get("/retrieve", retrieveHandler);

export default restaurantRouter;