import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email address"],
      // Regex for email address
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    contact_no: {
      type: Number,
    },
    first_name: String,
    last_name: String,
    is_admin: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
  },
  { timestamps: true }
);

//-------- UserSchema Methods --------

// Method to hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to check if Password match
userSchema.methods.matchPassword = async function (password) {
  try {
    var isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Method to get jwt token
userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Method to get reset password token
userSchema.methods.getResetPasswordToken = function () {
  const token = crypto.randomBytes(20).toString("hex");

  const signedToken = jwt.sign({ token: token }, process.env.JWT_SECRET, {
    expiresIn: process.env.RESET_EXPIRE,
  });

  this.resetPasswordToken = token;
  return signedToken;
};

export const User = mongoose.model("User", userSchema);
