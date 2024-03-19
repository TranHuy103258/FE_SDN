import { Navigate } from "react-router-dom";

import { PublicRoute } from "./public-route";
import Login from "../components/login/Login";

export function authRoutes() {
  return {
    path: "/",
    element: <PublicRoute />,
    children: [
      { index: true, element: <Navigate to="login" /> },
      {
        path: "login",
        element: <Login />,
      },
    ],
  };
}
