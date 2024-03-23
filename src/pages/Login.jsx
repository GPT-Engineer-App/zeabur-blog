import React from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleGitHubLogin = () => {};

  const handleGoogleLogin = () => {};

  return (
    <Box>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="xl">
          Login
        </Heading>
        <Button leftIcon={<FaGithub />} onClick={handleGitHubLogin}>
          Login with GitHub
        </Button>
        <Button leftIcon={<FaGoogle />} onClick={handleGoogleLogin}>
          Login with Google
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
