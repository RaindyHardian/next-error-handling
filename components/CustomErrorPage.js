import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function CustomErrorPage({ error, clearError }) {
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      bg="gray.500"
    >
      <Box
        px={4}
        bg="white"
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box p={4} pb={8} pt={10}>
          <VStack>
            <Text
              fontWeight="bold"
              size="lg"
              onClick={() => console.log(error)}
            >
              Unhandled Application Error
            </Text>

            <Text>{error?.message}</Text>

            <Button colorScheme="blue" onClick={clearError}>
              Clear error
            </Button>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
