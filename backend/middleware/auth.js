import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import ErrorResponse from "../utils/errorResponse.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};
