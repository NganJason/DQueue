import jwt from "jsonwebtoken";

import ErrorResponse from "../utils/errorResponse.js";
import { User } from "../models/userModel.js";

export const checkAuthHandler = async (req, res, next) => {
  const token = req.cookies.token;
  res.cookie("token", token, { maxAge: 900000, httpOnly: true });
  res.status(200).json({ success: true, message: "You are logged in" });
};

export const signupHandler = async (req, res, next) => {
  const {
    email,
    password,
    first_name,
    last_name,
    contact_no,
    is_admin,
  } = req.body;

  try {
    const user = await User.create({
      email,
      password,
      first_name,
      last_name,
      contact_no,
      is_admin,
    });

    sendJWTtoken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

export const loginHandler = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 404));
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid password", 404));
    }

    sendJWTtoken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

export const logoutHandler = (req, res, next) => {
  try {
    res.cookie("token", "", { maxAge: 1 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};

export const forgotPasswordHandler = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email could not be found", 404));
    }

    const signedToken = user.getResetPasswordToken();

    await user.save();

    const resetURL = `http://localhost:3000/passwordreset/${signedToken}`;

    res.status(200).json({ success: true, message: resetURL });
  } catch (error) {
    console.log("hi");
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  const signedToken = req.params.signedToken;

  try {
    const decoded = jwt.verify(signedToken, process.env.JWT_SECRET);

    const user = await User.findOne({ resetPasswordToken: decoded.token });

    if (!user) {
      return next(new ErrorResponse("Invalid Reset Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;

    await user.save();

    // Sign user out after password reset
    res.cookie("token", "", { maxAge: 1 });
    res.status(201).json({
      success: true,
      data: "Password Reset Success",
    });
  } catch (error) {
    next(error);
  }
};

export const privateHandler = async (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: "You have access to protected route" });
};

const sendJWTtoken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  user.password = "";
  res.cookie("token", token, { maxAge: 900000, httpOnly: true });
  res.status(statusCode).json({ success: true, token, user });
};
