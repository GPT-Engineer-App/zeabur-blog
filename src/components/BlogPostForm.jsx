import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const BlogPostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = React.useState(post.title);
  const [body, setBody] = React.useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...post, title, body });
  };

  return (
    <Box p={4} shadow="md" borderWidth="1px">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Body</FormLabel>
          <Textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Save
        </Button>
      </form>
    </Box>
  );
};

export default BlogPostForm;
