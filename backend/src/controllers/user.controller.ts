import asyncHandler from "../utils/asyncHandler.util.js";
import ApiError from "../utils/apiError.util.js";
import ApiResponse from "../utils/apiResponse.util.js";
import { UserModel } from "../models/user.model.js";

import type { Request, Response, NextFunction } from "express";

export const getProfile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.userId;
    if (!userId) {
      return next(new ApiError(401, "Unauthorized"));
    }

    const user = await UserModel.findById(userId).select("-password");
    if (!user) {
      return next(new ApiError(404, "User not found"));
    }

    res.status(200).json(new ApiResponse(200, "User profile", user));
  },
);

export const updateProfile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.userId;
    if (!userId) {
      return next(new ApiError(401, "Unauthorized"));
    }

    // Only allow safe fields to be updated
    const { name, phoneNumber, gpsLocation } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        ...(name && { name }),
        ...(phoneNumber && { phoneNumber }),
        ...(gpsLocation && { gpsLocation }),
      },
      {
        new: true, // return updated document
        runValidators: true, // validate against schema
      },
    ).select("-password");

    if (!updatedUser) {
      return next(new ApiError(404, "User not found"));
    }

    res
      .status(200)
      .json(new ApiResponse(200, "User profile updated", updatedUser));
  },
);

export const deleteProfile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.userId;
    if (!userId) {
      return next(new ApiError(401, "Unauthorized"));
    }

    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      return next(new ApiError(404, "User not found"));
    }

    res.status(200).json(new ApiResponse(200, "User profile deleted", {}));
  },
);
