import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      h="10%"
      position="fixed"
      left={0}
      bottom="0"
      alignItems="center"
      justifyContent="center"
      mt="10em"
      bgColor="black"
    >
      <Text color="#fff">Derechos @knd</Text>
    </Flex>
  );
};
