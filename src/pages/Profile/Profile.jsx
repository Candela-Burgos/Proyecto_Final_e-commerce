import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex
        w="80%"
        h="80%"
        justifyContent="space-evenly"
        alignItems="flex-start"
        flexDirection="column"
      >
        <Heading color="#fff" my="1em" fontSize="3em">
          My profile
        </Heading>
        <Flex
          w="50%"
          justifyContent="flex-start"
          alignItems="flex-end"
          flexDirection="row"
        >
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt={user.username}
            w="30%"
          />
          <Flex
            justifyContent="center"
            alignItems="space-between"
            flexDirection="column"
            ml="1em"
          >
            <Text color="#fff" mb="1em" fontSize="1.3em">
              <strong>Username:</strong> {user.username}
            </Text>
            <Text color="#fff" fontSize="1.3em">
              <strong>Email:</strong> {user.email}
            </Text>
          </Flex>
        </Flex>
        <Flex
          w="50%"
          justifyContent="flex-start"
          alignItems="flex-end"
          flexDirection="row"
        >
          <Link as={NavLink} to="/cart">
            <Button>Go to my cart</Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
