import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const UserPrimaryInfo = ({ user }) => {
  return (
    <Flex direction="column">
      <Text fontWeight="bold" lineHeight="15px">
        @{user.username}
      </Text>
      <Text fontWeight="semibold">{`${user.name?.firstName} ${user.name.lastName}`}</Text>
    </Flex>
  );
};

export default UserPrimaryInfo;
