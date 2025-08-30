import { ZodObject, ZodError } from "zod";
import ApiError from "../utils/apiError.util.js";
import type { Request, Response, NextFunction } from "express";

const validateMiddleware = (schema: ZodObject) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        return next(new ApiError(400, "Validation error", error.issues));
      }
      next(new ApiError(400, "Invalid request data"));
    }
  };
};

export default validateMiddleware;
