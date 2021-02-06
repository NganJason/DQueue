import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import {UnauthorizedError, NotFoundError} from "../utils/errorResponse.js"

export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new NotFoundError("No user found with this id"));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new UnauthorizedError("Not authorized to access this route"));
  }
};
