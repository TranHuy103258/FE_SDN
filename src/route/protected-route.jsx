import { Navigate, useLocation } from "react-router-dom";
import { useAuthentication } from "../auth/use-authentication.js";

export function ProtectedRoute({ children }) {
  const { isLogged } = useAuthentication();
  const location = useLocation();

  if (!isLogged) {
    return <Navigate state={{ from: location }} to="/login" replace />;
  }

  return children;
}
