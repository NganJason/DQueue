import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const loginHandler = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ sucess: false, error: "Please provide email and password" });
  }

  try {
    const user = await (await User.findOne({ email })).select("+password");

    if (!user) {
      res.status(404).json({ success: false, error: "Invalid credentials" });
    }

    const isMatch = user.matchPassword(password);

    if (!isMatch) {
      res.status(404).json({ success: false, error: "Invalid credentials" });
    }

    res.status(201).json({
      success: true,
      token: "123234",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
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

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const forgotPasswordHandler = async (req, res, next) => {};

export const resetPassword = async (req, res, next) => {};
