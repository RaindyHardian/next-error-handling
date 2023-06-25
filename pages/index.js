import useMakeRequest from '@/utils/useMakeRequest';
import { Flex, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import api from '../utils/axios';

const data = {};

const getUser = () => api.get('/user');

export default function Home() {
  const [simulateError, setSimulateError] = useState(false);

  const onSimulateError = () => {
    setSimulateError(true);
  };

  const { request } = useMakeRequest(true);

  const onCallAPI = () => {
    request(getUser());
  };

  return (
    <>
      <Flex px="50px" direction="column">
        <Text fontSize="4xl">Hello world!</Text>

        <Button mt="50px" colorScheme="blue" onClick={onSimulateError}>
          Simulate error
        </Button>

        {simulateError && <Text>{data.a.b}</Text>}

        <Button mt="50px" colorScheme="blue" onClick={onCallAPI}>
          Call API error
        </Button>
      </Flex>
    </>
  );
}
