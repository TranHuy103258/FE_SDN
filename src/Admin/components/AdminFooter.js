import React from "react";
import { BsFire } from "react-icons/bs";
export default function AdminFooter() {
  return (
    <footer style={{ background: "white" }}>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright: Made with{" "}
        <BsFire style={{ marginBottom: 0 }} size="20px" /> FPT University
      </div>
    </footer>
  );
}
