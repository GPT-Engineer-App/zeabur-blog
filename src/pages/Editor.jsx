import React, { useState } from "react";
import { Box, Button, Heading, Textarea, VStack } from "@chakra-ui/react";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {};

  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          New Blog Post
        </Heading>
        <Textarea placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Content (Markdown supported)" value={content} onChange={(e) => setContent(e.target.value)} minHeight="200px" />
        <Button onClick={handleSubmit}>Publish</Button>
      </VStack>
    </Box>
  );
};

export default Editor;
