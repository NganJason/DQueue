import bcrypt from "bcrypt";
import passportLocal from "passport-local";
import { User } from "../models/userModel.js";

var LocalStrategy = passportLocal.Strategy;

const strategy = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email_address" },
      (email_address, password, done) => {
        User.findOne({ email_address: email_address })
          .then((user) => {
            if (!user) {
              return done(null, false, { message: "Email is not registered." });
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;

              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, { message: "Password is incorrect" });
              }
            });
          })
          .catch((err) => console.log(err));
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};

export default strategy;
