import { useCallback } from "react";

import { useAuthentication } from "./use-authentication";

// Tạo hook (Custom hook)
// Kiểm tra quyền truy cập người dùng
export function useAuthorization() {
  const { currentUser, isAdmin, isLogged } = useAuthentication();

  const checkAccess = useCallback(
    function ({ accessRoles }) {
      console.log(accessRoles);

      if (!isLogged) return false;

      if (isAdmin) return true;

      return accessRoles.includes(currentUser.role);
      // sử dụng phương thức includes của mảng để kiểm tra currentUser.role
      // có bên trong accessRoles hay ko
    },
    [currentUser.role, isAdmin, isLogged] // Hàm này sẽ render lại khi các dependencies bên trong thay đổi
  );

  return {
    checkAccess,
  };
}
