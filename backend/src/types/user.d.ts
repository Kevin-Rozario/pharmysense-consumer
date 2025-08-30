import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  refreshToken?: string;
  role: "admin" | "user";
  phoneNumber?: string;
  gpsLocation?: {
    latitude: number;
    longitude: number;
  };
  createdAt?: Date;
  updatedAt?: Date;

  comparePassword(password: string): Promise<boolean>;
  generateTokens(): { accessToken: string; refreshToken: string };
}
