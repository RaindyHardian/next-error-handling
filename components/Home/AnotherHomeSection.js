import { Box, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const data = {};

const AnotherHomeSection = () => {
  const [simulateError, setSimulateError] = useState(false);

  const onSimulateError = () => {
    setSimulateError(true);
  };

  return (
    <Box mt="20px">
      <Button colorScheme="blue" onClick={onSimulateError}>
        Simulate another error
      </Button>

      {simulateError && <Text>{data.a.b}</Text>}
    </Box>
  );
};

export default AnotherHomeSection;
