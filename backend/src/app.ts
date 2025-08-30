import express from "express";
import cors from "cors";
import loggerMiddleware from "./middlewares/logger.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

// Cors Middleware
app.use(cors());

// Request Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger Middleware
app.use(loggerMiddleware);

// Routes
app.get("/", (req, res) => {
  res.json({
    success: true,
    status: 200,
    message: "Welcome to Pharmysense API",
  });
});
app.use("/api/v1/auth", authRoutes);

// Error Handler Middleware
app.use(errorMiddleware);

export default app;
