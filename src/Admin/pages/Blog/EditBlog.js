import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    image: "",
    categoryId: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchBlog();
    fetchCategories();
  }, []);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:9999/blogs/${id}`);
      const data = await response.json();
      setBlog(data);
      // Populate form data with current blog data
      setFormData({
        title: data.title,
        body: data.body,
        image: data.image,
        categoryId: data.categoryId,
      });
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

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
      const response = await fetch(`http://localhost:9999/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update blog");
      }
      console.log("Blog updated successfully");
      window.alert("Blog updated successfully!");
      window.location.href = "/admin/blog";
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="main-product-wrapper py-5 home-wrapper-2 mt-2">
      <div className="row">
        <div className="col-12 my-3">
          <Button className="btn-danger">
            <Link className="text-white" to="/admin/blog">
              Back to list
            </Link>
          </Button>
        </div>
        <div className="col-7 row">
          <Form onSubmit={handleSubmit}>
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
            <Form.Group controlId="categoryId">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
              >
                <option value="">--- Select Category ---</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Blog
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default EditBlog;
