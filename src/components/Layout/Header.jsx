import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModalLogin } from '../../pages/Auth/Modal';
import { FiSun, FiMoon } from 'react-icons/fi';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
        <Link as={NavLink} to="/products" color="white" mx="1.5em">
          Store
        </Link>
        <Link as={NavLink} to="/profile" color="white" mx="1.5em">
          Profile
        </Link>
        <Text color="#fff">|</Text>
        <Button
          onClick={toggleColorMode}
          color="white"
          // mx="1em"
          bgColor="transparent"
          _hover={{ bgColor: 'transparent' }}
          _focus={{ bgColor: 'transparent' }}
        >
          {colorMode === 'light' ? <FiSun /> : <FiMoon />}
        </Button>
        <ModalLogin />
      </Box>
    </Flex>
  );
};
