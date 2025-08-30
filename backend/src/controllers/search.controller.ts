import asyncHandler from "../utils/asyncHandler.util.js";
import type { Request, Response } from "express";
import ApiError from "../utils/apiError.util.js";
import ApiResponse from "../utils/apiResponse.util.js";
import { searchMedicineNearby } from "../services/search.service.js";

export const searchMedicines = asyncHandler(
  async (req: Request, res: Response) => {
    const { medicineName, lat, lng, radiusKm } = req.query;

    if (!medicineName || !lat || !lng) {
      throw new ApiError(400, "Missing required params: medicine, lat, lng");
    }

    const medicines = await searchMedicineNearby(
      medicineName as string,
      Number(lat),
      Number(lng),
      Number(radiusKm) || 3,
    );

    if (!medicines.length) {
      throw new ApiError(404, "No medicines found");
    }

    return res.status(200).json(new ApiResponse(200, "Success", medicines));
  },
);
