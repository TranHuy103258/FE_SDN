import * as bcrypt from "bcryptjs";
import { PASSWORD_SECRET } from "./passwordSecret";

// custom hook hashcode
export function hashCode() {
  // nhận vào 1 password dùng bcrypt để mã hóa với mức độ salt là 10
  // Đồng thời tạo ra 1 chuỗi hash dài hơn mk cung cấp, Sử dụng nhiều còng lặp để tăng tính an toàn
  function hash(password) {
    return bcrypt.hashSync(password, PASSWORD_SECRET);
  }

  // Nhận 1 mật khẩu và 1 mật khẩu đã mã hóa
  function verifyCode(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword); // kiểm tra có khớp với mk mã hóa hay ko
  }

  return { hash, verifyCode };
}
