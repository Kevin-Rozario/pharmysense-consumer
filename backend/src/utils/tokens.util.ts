import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../config/env.config.js";

type Payload = {
  userId: string;
  role: string;
};

export const generateTokens = ({ userId, role }: Payload) => {
  const accessToken = jwt.sign({ userId, role }, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_TTL,
  } as SignOptions);

  const refreshToken = jwt.sign({ userId, role }, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_TTL,
  } as SignOptions);

  return { accessToken, refreshToken };
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
