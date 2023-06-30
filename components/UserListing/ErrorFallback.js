import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ErrorFallback = ({ ...props }) => {
  return (
    <Flex
      background="gray.200"
      w="100%"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Text maxW="500px" fontWeight="semibold">
        Something went wrong, click to retry...
      </Text>
    </Flex>
  );
};

export default ErrorFallback;
