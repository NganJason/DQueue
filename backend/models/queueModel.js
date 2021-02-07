import mongoose from "mongoose";
const { Schema } = mongoose;

const queueSchema = new Schema(
  {
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    pax: Number,
    enter_queue_time: { type: Date, default: Date.now },
    enter_restaurant_time: Date,
    exit_restaurant_time: Date,
    state: Number,
  },
  { timestamps: true }
);

export const Queue = mongoose.model("Queue", queueSchema);
