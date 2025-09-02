import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("maps", "routes/MapView.tsx"),
  route("auth/login", "routes/Login.tsx"),
  route("auth/register", "routes/Register.tsx"),
] satisfies RouteConfig;
