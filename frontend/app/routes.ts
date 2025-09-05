import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // Public routes
  index("routes/Home.tsx"),
  route("map", "routes/Map.tsx"),
  route("about", "routes/About.tsx"),

  // Authentication routes
  ...prefix("auth", [
    route("login", "routes/Login.tsx"),
    route("register", "routes/Register.tsx"),
  ]),

  // Catch-all (404 page)
  route("*", "routes/NotFound.tsx"),
] satisfies RouteConfig;
