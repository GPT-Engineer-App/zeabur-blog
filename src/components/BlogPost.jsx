import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const BlogPost = ({ post }) => {
  return (
    <Box p={4} shadow="md" borderWidth="1px">
      <Heading as="h2" size="lg" mb={2}>
        {post.title}
      </Heading>
      <Text>{post.body}</Text>
    </Box>
  );
};

export default BlogPost;
