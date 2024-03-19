import React from "react";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import "./all.css";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="back-to-top"
      style={{
        display: backToTop ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px 20px",
        borderRadius: "100%",
        zIndex: 9999,
      }}
      onClick={scrollToTop}
    >
      <BsArrowUp />
    </div>
  );
};

export default BackToTop;