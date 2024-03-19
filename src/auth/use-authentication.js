import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useAuthentication() {
  const navigate = useNavigate();
  // Chuyển đổi đối tượng json thành 1 đối tượng javascript
  // Là data đc lấy từ sessionStorage
  const user = JSON.parse(sessionStorage.getItem("data"));
  const location = useLocation(); // lấy thông tin về vị trí hiện tại của ứng dụng từ React Router
  const isLogged = !!user; //được sử dụng để chuyển đổi giá trị của biến thành kiểu dữ liệu boolean

  useEffect(() => {
    if (isLogged && location.pathname === "/login") {
      // Nếu người dùng đã đăng nhập và location đang là /login thì hiển thị về home
      navigate("/");
    }
  }, [isLogged, location.pathname, navigate]);

  //user?.role: viết tắt của user && user.role. Nếu role tồn tại trong user thì trả vể role
  // Nếu ko tồn tại thì trả về undefined
  const isAdmin = isLogged && user?.role === "Admin";
  const role = user?.role || ""; // nếu role trong user tồn tại thì sẽ gán cho role
  const name = user?.name || ""; // nếu name trong user tồn tại thì sẽ gán cho name
  const currentUser = user || {}; // nếu user tồn tại trong session thì gán cho currentUser

  return {
    isLogged,
    isAdmin,
    role,
    name,
    currentUser,
  };
}
