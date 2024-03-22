import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import BlogPost from "../components/BlogPost";
import posts from "../posts.json";

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  return (
    <Container maxW="container.lg" py={8}>
      <BlogPost post={post} />
    </Container>
  );
};

export default PostPage;
