import React, { useState, useEffect } from "react";
import { Table, Image, Row, Col } from "react-bootstrap";
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
          <div className="filter-container ">
            <select onChange={handleCategoryChange} value={selectedCategory}>
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </Col>
        <Col md={9}>
          <div className="blogs-container ">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        style={{ width: "200px", height: "150px" }} // Cố định kích thước 200x150 pixels
                        thumbnail
                      />
                    </td>
                    <td>{blog.title}</td>
                    <Link to={`/blog/${blog._id}`}>View Detail</Link>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogList;
