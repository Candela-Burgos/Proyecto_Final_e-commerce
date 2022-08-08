import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const Profile = ({ user }) => {
  return (
    <Flex>
      <Heading>My profile</Heading>
      <Box>
        <Text>user</Text>
        <Text>user@gmail.com</Text>
      </Box>
    </Flex>
  );
};
