import React, { useState, useEffect } from "react";
import { Table, Image, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Fetch blogs from the server
    fetch("http://localhost:9999/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));

    // Fetch categories from the server
    fetch("http://localhost:9999/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.categoryId === selectedCategory)
    : blogs;

  return (
    <div className="blog-list-container mt-4">
      <Row>
        <Col md={3}>
          <div className="filter-container">
            <Form.Select
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </div>
        </Col>
        <Col md={9}>
          <div className="blogs-container">
            <Row className="text-center">
              {filteredBlogs.map((blog, index) => (
                <Col key={blog._id} md={4}>
                  <Link to={`/blog/${blog._id}`}>
                    {/* Sử dụng Col với md={4} để hiển thị 3 card trên 1 hàng */}
                    <Card style={{ width: "18rem", margin: "10px" }}>
                      <Card.Img
                        variant="top"
                        src={blog.image}
                        alt={blog.title}
                        style={{ height: "200px" }}
                      />
                      <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogList;
