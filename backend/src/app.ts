import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware.js";
import type { Request, Response } from "express";

const app = express();

// Cors Middleware
app.use(cors());

// Request Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger Middleware

// Routes
app.get("/", (req, res) => {
  res.json({
    success: true,
    status: 200,
    message: "Welcome to Pharmysense API",
  });
});

// Error Handler Middleware
app.use(errorMiddleware);

export default app;
