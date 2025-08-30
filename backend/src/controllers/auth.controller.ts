import type {Request, Response} from "express";
import asyncHandler from "../utils/asyncHandler.util.js";
import ApiError from "../utils/apiError.util.js";
import ApiResponse from "../utils/apiResponse.util.js";

// export const register = asyncHandler((req: Request, res: Response) => {
//     const {name, email, phoneNumber, password} = req.body;
// })