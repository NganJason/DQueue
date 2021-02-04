import { User } from "../models/userModel.js";
import ErrorResponse from "../utils/errorResponse.js";
import crypto from "crypto";

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
      return next(new ErrorResponse("Invalid credentials", 404));
    }

    sendJWTtoken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

export const signupHandler = async (req, res, next) => {
  const { email, password, first_name, last_name, contact_no } = req.body;

  try {
    const user = await User.create({
      email,
      password,
      first_name,
      last_name,
      contact_no,
    });

    sendJWTtoken(user, 201, res);
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

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetURL = `http://localhost:3000/passwordreset/${resetToken}`;

    res.status(200).json({ success: true, message: resetURL });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Reset Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

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
  res.cookie("token", token, { maxAge: 900000, httpOnly: true });
  res.status(statusCode).json({ success: true, token });
};
