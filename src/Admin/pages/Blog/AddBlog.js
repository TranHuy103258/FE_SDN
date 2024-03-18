import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    categoryId: "",
    title: "",
    body: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu formData tới API backend để tạo mới blog
    console.log("Form submitted with data:", formData);
    // Reset form fields
    setFormData({
      categoryId: "",
      title: "",
      body: "",
      image: "",
    });
  };

  return (
    <Row>
      <Col>
        <h1>Add New Blog</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="categoryId">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {/* Render categories dynamically from your state */}
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="body"
              value={formData.body}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Blog
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddBlog;
