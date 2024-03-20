import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Register from "../components/register/Register";
import Footerr from "../components/footer/Footer";
const RegisterPage = () => {
  return (
    <>
      <Header />
      <Register />
      <Footerr />
    </>
  );
};

export default RegisterPage;
