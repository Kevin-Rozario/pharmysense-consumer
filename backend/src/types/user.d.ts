import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string; // optional for Google users
  phoneNumber?: string;
  role: "admin" | "user";
  gpsLocation?: {
    latitude: number;
    longitude: number;
  };
  provider: "local" | "google";
  googleId?: string;
  picture?: string;
  refreshToken?: string;
  createdAt?: Date;
  updatedAt?: Date;

  comparePassword(password: string): Promise<boolean>;
  generateTokens(): { accessToken: string; refreshToken: string };
}
