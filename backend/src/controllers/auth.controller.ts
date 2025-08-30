import asyncHandler from "../utils/asyncHandler.util.js";
import ApiError from "../utils/apiError.util.js";
import ApiResponse from "../utils/apiResponse.util.js";
import { UserModel } from "../models/user.model.js";
import { env } from "../config/env.config.js";
import axios from "axios";
import qs from "qs";

import type { Request, Response, NextFunction } from "express";
import type { RegisterBody, LoginBody } from "../schemas/auth.schema.js";

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, phoneNumber, password }: RegisterBody = req.body;

    if (!name || !email || !password) {
      return next(
        new ApiError(400, "All fields are required: name, email, password"),
      );
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return next(new ApiError(400, "User already exists"));
    }

    const user = await UserModel.create({
      name,
      email,
      password,
      role: "user",
      phoneNumber,
      provider: "local",
    });
    if (!user) {
      return next(new ApiError(500, "Failed to create user"));
    }

    // Email logic later

    res
      .status(201)
      .json(new ApiResponse(201, "User created successfully.", user));
  },
);

// * TODO: Email verification to be implemented...
export const verifyEmail = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password }: LoginBody = req.body;
    if (!email || !password) {
      return next(
        new ApiError(400, "All fields are required: email, password"),
      );
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return next(new ApiError(400, "Invalid credentials"));
    }

    if (user.provider !== "local") {
      return next(new ApiError(400, "Please login with Google."));
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return next(new ApiError(400, "Invalid credentials"));
    }

    // check account verified (later...)

    const { accessToken, refreshToken } = user.generateTokens();
    user.refreshToken = refreshToken;
    await user.save();

    const cookieOptions = {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict" as const,
    };

    res
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .status(200)
      .json(new ApiResponse(200, "User logged in successfully.", user));
  },
);

export const logout = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.userId;

    if (!userId) {
      return next(new ApiError(401, "Unauthorized"));
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      return next(new ApiError(401, "Unauthorized"));
    }

    user.refreshToken = undefined;
    await user.save();

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict" as const,
    };

    res
      .clearCookie("accessToken", cookieOptions)
      .clearCookie("refreshToken", cookieOptions)
      .status(200)
      .json(new ApiResponse(200, "User logged out successfully.", {}));
  },
);

export const renewTokens = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return next(new ApiError(401, "Unauthorized"));
    }

    const userId = req.user?.userId;
    if (!userId) {
      return next(new ApiError(401, "Unauthorized"));
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      return next(new ApiError(401, "Unauthorized"));
    }

    if (user.refreshToken !== refreshToken) {
      return next(new ApiError(401, "Unauthorized"));
    }

    const { accessToken, refreshToken: newRefreshToken } =
      user.generateTokens();
    user.refreshToken = newRefreshToken;
    await user.save();

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict" as const,
    };

    res
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", newRefreshToken, cookieOptions)
      .status(200)
      .json(new ApiResponse(200, "Tokens renewed successfully.", {}));
  },
);

export const googleLogin = asyncHandler(async (req: Request, res: Response) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${env.GOOGLE_CLIENT_ID}&redirect_uri=${env.GOOGLE_REDIRECT_URI}&response_type=code&scope=openid%20profile%20email`;

  res.redirect(url);
});

export const googleCallback = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { code } = req.query;
    if (!code) {
      return next(new ApiError(400, "Code is required"));
    }

    // Exchange code for tokens
    const { data } = await axios.post(
      "https://oauth2.googleapis.com/token",
      qs.stringify({
        client_id: env.GOOGLE_CLIENT_ID,
        client_secret: env.GOOGLE_CLIENT_SECRET,
        redirect_uri: env.GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code",
        code,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const { access_token, id_token } = data;

    if (!access_token || !id_token) {
      return next(new ApiError(400, "Failed to get Google tokens"));
    }

    // Fetch Google profile
    const { data: profile } = await axios.get(
      "https://openidconnect.googleapis.com/v1/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      },
    );

    const { sub, email, name } = profile;

    if (!email) {
      return next(new ApiError(400, "Google account has no email"));
    }

    // Find or create user
    let user = await UserModel.findOne({ email });
    if (!user) {
      user = await UserModel.create({
        name,
        email,
        provider: "google",
        googleId: sub,
        role: "user",
      });
    } else {
      // Update profile if changed
      user.name = name;
      await user.save();
    }

    // Generate tokens
    const { accessToken, refreshToken } = user.generateTokens();
    user.refreshToken = refreshToken;
    await user.save();

    const cookieOptions = {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict" as const,
    };

    res
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .status(200)
      .json(new ApiResponse(200, "Google login successful.", user));
  },
);
