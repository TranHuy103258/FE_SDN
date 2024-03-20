import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footerr from "../components/footer/Footer";
import BlogList from "../components/blog/blogList";
const BlogPage = () => {
  return (
    <>
      <Header />
      <BlogList />
      <Footerr />
    </>
  );
};

export default BlogPage;
