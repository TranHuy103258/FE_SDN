import { Outlet } from "react-router-dom";
import { AuthorizationRoute } from "./authorization-route";
import { ProtectedRoute } from "./protected-route";
import Cart from "../components/cart/Cart";
import ErrorPage from "../pages/Error/errorPage";
import UserHome from "../components/userHome/UserHome";

export function customerRoutes() {
  return {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <ProtectedRoute>
        <AuthorizationRoute roles={["user"]}>
          <Outlet />
        </AuthorizationRoute>
      </ProtectedRoute>
    ),
    children: [{ path: "/cart", element: <Cart /> }],
  };
}
