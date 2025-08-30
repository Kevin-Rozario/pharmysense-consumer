import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../config/env.config.js";

type Payload = {
  userId: string;
  role: "admin" | "user";
};

export const verifyToken: (
  token: string,
  options: { type: "access" | "refresh" },
) => Payload | null = (
  token: string,
  options: { type: "access" | "refresh" },
) => {
  try {
    const decoded = jwt.verify(
      token,
      options.type === "access"
        ? env.JWT_ACCESS_SECRET
        : env.JWT_REFRESH_SECRET,
    );
    if (
      typeof decoded === "object" &&
      decoded !== null &&
      "userId" in decoded &&
      "role" in decoded
    ) {
      return decoded as Payload;
    }
    return null;
  } catch (err: any) {
    console.error("Error verifying token:", err.message);
    return null;
  }
};
