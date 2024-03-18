import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import "./blog.css";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    categoryId: "",
    title: "",
    body: "",
    image: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:9999/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("categoryId", formData.categoryId);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("body", formData.body);
      formDataToSend.append("image", formData.image);

      const response = await fetch("http://localhost:9999/blogs", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Blog added successfully!");
        handleBlog();
      } else {
        console.error("Failed to add blog.");
        alert("Failed to add blog.");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("An error occurred while adding the blog.");
    }
  };

  const handleBlog = () => {
    window.location.href = "/admin/blog/";
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file }); // Lưu trữ đối tượng file vào state
  };

  return (
    <Container className="addBlog">
      <Row>
        <Col>
          <h1 className="text-center">Add New Blog</h1>
          <Form onSubmit={handleSubmit} className="text-center">
            <Form.Group controlId="categoryId" className="formGroup">
              <Form.Control
                as="select"
                name="categoryId"
                onChange={handleChange}
                required
              >
                <option>--- Select Category ---</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="title" className="formGroup">
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                required
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="body" className="formGroup">
              <Form.Control
                as="textarea"
                rows={4}
                name="body"
                placeholder="Body"
                required
                value={formData.body}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="image" className="formGroup">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                required
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Add Blog
              </Button>
              <Button variant="primary" onClick={handleBlog}>
                Back to list
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBlog;
