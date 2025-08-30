import type { Request, Response, NextFunction } from "express";
import asyncHandler from "../utils/asyncHandler.util.js";
import ApiError from "../utils/apiError.util.js";
import ApiResponse from "../utils/apiResponse.util.js";

// * TODO: Working...

export const getProfile = asyncHandler(
  (req: Request, res: Response, next: NextFunction) => {},
);
export const updateProfile = asyncHandler(
  (req: Request, res: Response, next: NextFunction) => {},
);
export const deleteProfile = asyncHandler(
  (req: Request, res: Response, next: NextFunction) => {},
);
