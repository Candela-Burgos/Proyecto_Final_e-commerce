import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

const ShopLayout = ({ children }) => {
  return (
    // <Flex
    //   w="100%"
    //   justifyContent="center"
    //   alignItems="center"
    //   flexDirection="column"
    //   // mb="8em"
    // >
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      className="HOLA"
      pt="6em"
    >
      <Header />
      <Flex
        as="main"
        w="90%"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        gap={10}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
    // </Flex>
  );
};

export { ShopLayout };
