import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BlogPost = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Box p={4} shadow="md" borderWidth="1px">
      <Button onClick={() => navigate("/")} mb={4}>
        Back
      </Button>
      <Heading as="h2" size="lg" mb={2}>
        {post.title}
      </Heading>
      <Text>{post.body}</Text>
    </Box>
  );
};

export default BlogPost;
