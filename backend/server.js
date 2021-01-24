import "dotenv/config.js";
import flash from "connect-flash";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";

import config from "./config.js";
import app from "./app.js";
import userRouter from "./routes/userRouter.js";
import strategy from "./config/passport.js";

const PORT = config.port;
const mongoUri = config.mongoUri;
const session_secret = config.sessionSecret;
strategy(passport);

async function run() {
  try {
    // Connect to mongo database
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to database!");

    // Listen to port
    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`App is listening at port ${PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }

  // Flash
  app.use(flash());

  // Session
  app.use(
    session({
      secret: session_secret,
      resave: true,
      saveUninitialized: true,
    })
  );

  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  // Routes
  app.use("/user", userRouter);
}

run();
