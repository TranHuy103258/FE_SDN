import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:9999/blogs/${id}`);
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={12} className="mx-auto">
          <Row>
            <h2 className="text-center mb-4">{blog.title}</h2>
            <Row>
              <Col xs={12} md={4}>
                <img
                  src={blog.image}
                  alt="Blog"
                  className="img-fluid rounded mb-4"
                  style={{ maxWidth: "100%", maxHeight: "1000px" }} // Đặt giới hạn kích thước ảnh
                />
              </Col>
              <Col xs={12} md={8}>
                {blog.body}
              </Col>
            </Row>
            <Col xs={12} md={2}></Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="danger">
              <Link className="text-white" to="/blog">
                Back to list
              </Link>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
