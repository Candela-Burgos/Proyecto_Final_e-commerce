import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <Flex
      w="90%"
      h="100%"
      justify="center"
      alignItems="center"
      wrap="wrap"
      gap={10}
      mt="8em"
    >
      <Heading color="#fff">Welcome</Heading>
      <Text color="#fff">Here you can find the game you want to buy</Text>
    </Flex>
  );
};

export { Home };
