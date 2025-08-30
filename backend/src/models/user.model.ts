import { Model, Schema, model, models } from "mongoose";
import type { IUser } from "../types/user.d.js";
import bcrypt from "bcryptjs";
import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../config/env.config.js";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    role: { type: String, enum: ["admin", "user"] },
    gpsLocation: {
      latitude: { type: Number },
      longitude: { type: Number },
    },
  },
  { timestamps: true },
);

userSchema.pre<IUser>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (
  password: string,
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateTokens = function () {
  const accessToken = jwt.sign(
    {
      userId: this._id,
      role: this.role,
    },
    env.JWT_ACCESS_SECRET,
    {
      expiresIn: env.JWT_ACCESS_TTL,
    } as SignOptions,
  );

  const refreshToken = jwt.sign(
    {
      userId: this._id,
      role: this.role,
    },
    env.JWT_REFRESH_SECRET,
    {
      expiresIn: env.JWT_REFRESH_TTL,
    } as SignOptions,
  );

  return { accessToken, refreshToken };
};

export const UserModel: Model<IUser> =
  (models.User as Model<IUser>) || model<IUser>("User", userSchema);
