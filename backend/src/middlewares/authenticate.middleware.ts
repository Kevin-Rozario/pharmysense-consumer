import type { Request, Response, NextFunction } from "express";
import ApiError from "../utils/apiError.util.js";
import { verifyToken } from "../utils/tokens.util.js";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        role: "admin" | "user";
      };
    }
  }
}

const authenticateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken || !refreshToken) {
    return next(
      new ApiError(401, "Unauthorized: Invalid access or refresh token"),
    );
  }

  try {
    const decodedAccessToken = verifyToken(accessToken, { type: "access" });
    if (!decodedAccessToken) {
      return next(new ApiError(401, "Unauthorized: Invalid access token"));
    }
    req.user = decodedAccessToken;
    next();
  } catch (err: any) {
    next(new ApiError(401, "Unauthorized"));
  }
};

export default authenticateMiddleware;
