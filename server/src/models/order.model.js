import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    customer:{
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
    }
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", OrderSchema);
