import type { Request, Response, NextFunction } from "express";
import logger from "../config/logger.config.js";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = `${Date.now() - start}ms`;
    logger.info(
      `HTTP ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}`,
      {
        service: "user-service",
        method: req.method,
        url: req.originalUrl,
        status: res.statusCode,
        duration,
      },
    );
  });

  next();
};

export default loggerMiddleware;
