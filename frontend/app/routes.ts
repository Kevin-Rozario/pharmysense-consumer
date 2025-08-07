import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("maps", "routes/Map.tsx"),
  route("login", "routes/Login.tsx"),
  route("register", "routes/Register.tsx"),
] satisfies RouteConfig;
