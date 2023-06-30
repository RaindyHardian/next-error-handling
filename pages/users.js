import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import UserListing from '@/components/UserListing/UserListing';

const USERS = [
  {
    id: 1,
    username: 'user1',
    name: {
      firstName: 'user',
      lastName: '1',
    },
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a tortor elit. Donec non fringilla risus, vel porta turpis. Donec scelerisque odio a quam aliquam tempor. Nullam nulla risus, vestibulum tristique consequat at, pulvinar eu est.',
  },
  {
    id: 2,
    username: 'user2',
    name: {
      firstName: 'user',
      lastName: '3',
    },
    desc: 'libero ut pellentesque elementum, purus augue iaculis orci, eu hendrerit odio dolor eu magna. Morbi dapibus dictum feugiat.',
  },
  {
    id: 3,
    username: 'user3',
    name: {
      firstName: 'user',
      lastName: '3',
    },
    desc: 'adipiscing elit. Quisque lacinia, libero ut pellentesque elementum, purus augue iaculis orci, eu hendrerit odio dolor eu magna. Morbi dapibus dictum feugiat.',
  },
];

export default function UserListingPage() {
  const [users, setUsers] = useState([...USERS]);

  const simulateError = () => {
    setUsers((val) =>
      val.map((user) => {
        if (user.id === 2) {
          delete user.name;
          return user;
        }
        return user;
      })
    );
  };

  return (
    <Flex direction={'column'} px="3rem">
      <Text fontSize="5xl" mb="15px">
        User Listing
      </Text>
      <UserListing users={users} />
      <Button colorScheme="blue" mt="80px" onClick={simulateError}>
        Simulate error
      </Button>
    </Flex>
  );
}
