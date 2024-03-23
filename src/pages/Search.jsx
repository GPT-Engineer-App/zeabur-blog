import React, { useState } from "react";
import { Box, Heading, Input, VStack } from "@chakra-ui/react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {};

  return (
    <Box>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          Search Blog Posts
        </Heading>
        <Input placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        {}
      </VStack>
    </Box>
  );
};

export default Search;
