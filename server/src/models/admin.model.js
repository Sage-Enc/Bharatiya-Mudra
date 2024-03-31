import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phonenumber: {
        type: Number,
        required: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // Cloudinary URL Here
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    // refreshToken:{
    //     type: String,
    // },
  },
  {
    timestamps: true,
  }
);

export const Admin = mongoose.model("Admin", AuctionSchema);
