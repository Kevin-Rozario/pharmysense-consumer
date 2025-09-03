import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("auth/login", "routes/Login.tsx"),
  route("auth/register", "routes/Register.tsx"),
  route("map", "routes/Map.tsx"),
] satisfies RouteConfig;
