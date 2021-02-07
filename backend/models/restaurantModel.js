import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantSchema = new Schema(
    {
        restaurantName: {
            type: String,
            required: true
        },
        address1: {
            type: String,
            required: true
        },
        address2: {
            type: String
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        postCode: {
            type: Number,
            required: true
        },
        contact: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: [true, "Please provide an email address"],
            // Regex for email address
            match: [
                /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                "Please provide a valid email",
            ],
        },
        openingHours: {
            type: String
        },
        //To implement reference to user schema
        admin:{
            type: Boolean
        }
    },
    { timestamps: true }
)

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
