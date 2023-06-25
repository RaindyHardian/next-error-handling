import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function CustomErrorPage({ message }) {
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
        {...props}
      >
        <Box p={4} pb={8} pt={10}>
          <Flex mb={8} justifyContent="center">
            {/* <img width="130px" src="/sourci_logo-black.svg" /> */}
          </Flex>

          <VStack>
            <Text fontWeight="bold" size="lg">
              Unhandled Application Error
            </Text>

            <Text>{message}</Text>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
