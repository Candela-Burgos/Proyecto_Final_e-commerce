import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModalLogin } from '../../pages/Auth/Modal';
import { Profile } from '../../pages/Profile/Profile';

export const Header = ({ user, setUser }) => {
  return (
    <Flex
      as="nav"
      bgColor="black"
      w="100%"
      h="10%"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
    >
      <Heading color="white" ml="2em">
        KGS
      </Heading>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mr="5em"
        w="auto"
      >
        <Link as={NavLink} to="/" color="white" mr="1.5em">
          Home
        </Link>
        <Link as={NavLink} to="/product" color="white" mx="1.5em">
          Store
        </Link>
        <ModalLogin user={user} setUser={setUser} />
      </Box>
    </Flex>
  );
};
