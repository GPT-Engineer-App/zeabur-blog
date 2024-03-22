import React, { useState, useEffect } from "react";
import { Box, Heading, Text, VStack, HStack, Spacer, Container, Image, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from GitHub repository
    fetch("https://api.github.com/repos/yourusername/your-repo/contents/posts")
      .then((response) => response.json())
      .then((data) => {
        const postPromises = data.map((file) => fetch(file.download_url).then((response) => response.text()));
        Promise.all(postPromises).then((postContents) => {
          const parsedPosts = postContents.map((content) => {
            const [title, ...body] = content.split("\n");
            return { title: title.replace(/^#\s/, ""), body: body.join("\n") };
          });
          setPosts(parsedPosts);
        });
      });
  }, []);

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <HStack>
          <Heading as="h1" size="xl">
            My Personal Blog
          </Heading>
          <Spacer />
          <Link href="https://github.com/yourusername/your-repo" isExternal>
            <FaGithub size={24} />
          </Link>
        </HStack>
        {posts.map((post, index) => (
          <Box key={index} p={4} shadow="md" borderWidth="1px">
            <Heading as="h2" size="lg" mb={2}>
              {post.title}
            </Heading>
            <Text>{post.body}</Text>
          </Box>
        ))}
        <Box>
          <Image src="https://images.unsplash.com/photo-1626075292082-a2184e5d23fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGJsb2d8ZW58MHx8fHwxNzExMTIyNDgwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Personal Blog" objectFit="cover" w="100%" h={48} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
