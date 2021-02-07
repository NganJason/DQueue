import "dotenv/config.js";
import mongoose from "mongoose";

import config from "./config.js";
import app from "./app.js";
import userRouter from "./routes/userRouter.js";
import errorHandler from "./handlers/errorHandler.js";

const PORT = config.port;
const mongoUri = config.mongoUri;

async function run() {
  try {
    // Connect to mongo database
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to database!");

    // Routes
    app.use("/api/user", userRouter);

    // Error Handler (Must be last piece of middleware)
    app.use(errorHandler);

    // Listen to port
    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`App is listening at port ${PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
}

run();
