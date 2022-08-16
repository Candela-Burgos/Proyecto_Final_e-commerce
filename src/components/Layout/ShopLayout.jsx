import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

const ShopLayout = ({ children }) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      // mb="8em"
      className="shopLayout"
    >
      <Header />
      <Box
        as="main"
        display="flex"
        w="100%"
        h="100vh"
        justify="center"
        alignItems="center"
        flexDirection="column"
        className="boxLayout"
      >
        {children}
      </Box>
      {/* <Footer /> */}
    </Flex>
  );
};

export { ShopLayout };
