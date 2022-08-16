import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../Hook/Zustand/useAuth';

export const Profile = () => {
  const {
    auth: { user },
  } = useAuth();
  console.log(user);

  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        display="flex"
        w="80%"
        h="80%"
        justifyContent="space-evenly"
        alignItems="flex-start"
        flexDirection="column"
      >
        <Heading color="#fff" my="1em" fontSize="3em">
          My profile
        </Heading>
        <Box
          display="flex"
          w="80%"
          h="80%"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="row"
        >
          <Box
            display="flex"
            w="50%"
            h="100%"
            justifyContent="center"
            alignItems="space-between"
            flexDirection="column"
            mr="2em"
          >
            <Text color="#fff">Photo:</Text>
            <Text color="#fff" mb="1em">
              Username:
            </Text>
            <Text color="#fff">Email:</Text>
          </Box>
          <Box
            display="flex"
            w="50%"
            h="100%"
            justifyContent="center"
            alignItems="space-between"
            flexDirection="column"
          >
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt={user.username}
              w="30%"
            />
            <Text color="#fff" mb="1em">
              {user.username}
            </Text>
            <Text color="#fff">{user.email}</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
