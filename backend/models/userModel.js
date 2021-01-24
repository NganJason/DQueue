import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email_address: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact_no: {
      type: Number,
      required: true,
    },
    first_name: String,
    last_name: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
