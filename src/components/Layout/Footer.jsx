import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      p={8}
      alignItems="center"
      justifyContent="center"
      bgColor="#000"
    >
      <Text color="#fff">Created by Knd - React Final Project 2022</Text>
    </Flex>
  );
};
