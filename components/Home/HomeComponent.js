import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import AnotherHomeSection from './AnotherHomeSection';
import ErrorBoundary from '../ErrorBoundary';

const data = {};

const Home = () => {
  const [simulateError, setSimulateError] = useState(false);

  const onSimulateError = () => {
    setSimulateError(true);
  };

  return (
    <>
      <Box px="50px">
        <Text fontSize="4xl">Hello world!</Text>

        <Button colorScheme="blue" onClick={onSimulateError}>
          Simulate error
        </Button>

        {simulateError && <Text>{data.a.b}</Text>}

        <ErrorBoundary
          CustomFallbackUI={({ error, clearError }) => (
            <Text onClick={clearError}>
              Something went wrong <b>[{error.message}].</b> click to retry
            </Text>
          )}
        >
          <AnotherHomeSection />
        </ErrorBoundary>
      </Box>
    </>
  );
};

export default Home;
