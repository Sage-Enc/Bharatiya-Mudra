import mongoose, { Schema } from "mongoose";

const CoinLogSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: "Coin",
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
        type: String,
        enum: ["PENDING", "DELIVERED", "CANCELLED"],
        default: "PENDING",
    }
  },
  {
    timestamps: true,
  }
);

export const CoinLog = mongoose.model("CoinLog", CoinLogSchema);
