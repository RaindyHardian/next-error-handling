import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import ErrorFallback from './ErrorFallback';
import UserPrimaryInfo from './UserPrimaryInfo';

const UserListItem = ({ user }) => {
  return (
    <Flex direction="column" px="1rem">
      <Flex justifyContent="space-between" mb="5px">
        <ErrorBoundary CustomFallbackUI={() => <ErrorFallback />}>
          <UserPrimaryInfo user={user} />
        </ErrorBoundary>

        <Button colorScheme={'twitter'} flexShrink={0}>
          Follow
        </Button>
      </Flex>
      <Text>{user.desc}</Text>
    </Flex>
  );
};

export default UserListItem;
