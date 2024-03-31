import mongoose, { Schema } from "mongoose";

const CoinSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    age: {          // Coin's Age in Years
        type: Number,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    iprice: {
        type: Number,
        // required: true,
    },
    image: {
        type: String, // Cloudinary URL Here
        required: true,
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
  },
  {
    timestamps: true,
  }
);

export const Coin = mongoose.model("Coin", CoinSchema);
