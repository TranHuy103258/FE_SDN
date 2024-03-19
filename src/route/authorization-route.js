import { Navigate } from "react-router-dom";
import { useAuthorization } from "../auth/use-authorization.js";

export function AuthorizationRoute(props) {
  const { roles, children } = props;
  const { checkAccess } = useAuthorization();
  const canAccess = checkAccess({ accessRoles: roles });

  return canAccess ? children : <Navigate to={"/login"} />;
}
