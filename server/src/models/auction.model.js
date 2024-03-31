import mongoose, { Schema } from "mongoose";

const AuctionSchema = new Schema(
  {
    item: {
        type: Schema.Types.ObjectId,
        ref: "Coin",
    },
    rbid: {
        type: Number,
        required: true,
    },
    datentime:{
        type: Date,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Auction = mongoose.model("Auction", AuctionSchema);
