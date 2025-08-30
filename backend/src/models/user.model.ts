import { Schema, model } from "mongoose";
import type { IUser } from "../types/user.d.js";

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    gpsLocation: {
      latitude: { type: Number },
      longitude: { type: Number },
    },
  },
  { timestamps: true },
);

export const UserModel = model<IUser>("User", UserSchema);
