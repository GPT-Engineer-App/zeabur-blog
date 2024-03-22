import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Heading } from "@chakra-ui/react";
import BlogPostForm from "../components/BlogPostForm";
import posts from "../posts.json";

const EditPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  const handleSubmit = (updatedPost) => {
    console.log("Updated post:", updatedPost);
    navigate(`/posts/${id}`);
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" mb={8}>
        Edit Post
      </Heading>
      <BlogPostForm post={post} onSubmit={handleSubmit} />
    </Container>
  );
};

export default EditPost;
