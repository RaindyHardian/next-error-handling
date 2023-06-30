import { StackDivider, VStack } from '@chakra-ui/react';
import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import ErrorFallback from './ErrorFallback';
import UserListItem from './UserListItem';

const UserListing = ({ users }) => {
  return (
    <ErrorBoundary
      CustomFallbackUI={() => <ErrorFallback minHeight="300px" maxW="500px" />}
    >
      <VStack
        divider={<StackDivider borderColor="gray.600" />}
        direction={'column'}
        border="1px solid black"
        maxW="500px"
        borderRadius="5px"
        py="1rem"
      >
        {users.map((user) => (
          <ErrorBoundary
            key={user.id}
            CustomFallbackUI={() => <ErrorFallback minHeight="80px" />}
          >
            <UserListItem key={user.id} user={user} />
          </ErrorBoundary>
        ))}

        {/* {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))} */}
      </VStack>
    </ErrorBoundary>
  );
};

export default UserListing;
