import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import passport from "passport";

export const loginHandler = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (info) return res.send(info);
    req.login(user, (e) => {
      if (e) return next(e);
      return res.send(user);
    });
  })(req, res, next);
};

export const logoutHandler = (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.send(req.flash());
};

export const signupHandler = async (req, res, next) => {
  const {
    email_address,
    password,
    first_name,
    last_name,
    contact_no,
  } = req.body;

  try {
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(password, salt);
    var newUser = new User({
      email_address,
      password: hash,
      first_name,
      last_name,
      contact_no,
    });

    var savedUser = await newUser.save();
    // res.redirect("/login");
    res.json(savedUser);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
  next();
};
