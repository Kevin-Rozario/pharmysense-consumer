import type { Request, Response, NextFunction } from "express";
import ApiError from "../utils/apiError.util.js";

const authorizeMiddleware =
  (roles: ("admin" | "user")[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) {
      return next(new ApiError(401, "Unauthorized"));
    }

    if (!roles.includes(user.role)) {
      return next(new ApiError(403, "Forbidden"));
    }

    return next();
  };

export default authorizeMiddleware;
