import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home page
  index("routes/Home.tsx"),

  // Authentication Routes
  route("auth/login", "routes/Login.tsx"),
  route("auth/register", "routes/Register.tsx"),

  // Map & Pharmacy Routes
  route("map", "routes/Map.tsx"),

  // Catch-all route
  route("*", "routes/NotFound.tsx"),
] satisfies RouteConfig;
