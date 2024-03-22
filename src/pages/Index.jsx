import React from "react";
import { VStack, HStack, Spacer, Container, Heading, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import BlogPost from "../components/BlogPost";
import posts from "../posts.json";

const Index = () => {
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
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <BlogPost post={post} />
          </Link>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
