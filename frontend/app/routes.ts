import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // Public routes
  index("pages/Home.tsx"),
  route("map", "pages/Map.tsx"),
  route("about", "pages/About.tsx"),
  route("contact", "pages/Contact.tsx"),

  // Authentication routes
  ...prefix("auth", [
    route("login", "pages/Login.tsx"),
    route("register", "pages/Register.tsx"),
  ]),

  // Catch-all (404 page)
  route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
