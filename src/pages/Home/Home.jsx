import { Flex, Heading, Text } from '@chakra-ui/react';
import { Carousel } from '../../components/Carousel/Carousel';

const Home = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      wrap="wrap"
      gap={10}
    >
      <Heading color="#fff" fontSize="5em">
        Welcome!
      </Heading>
      <Text color="#fff" fontSize="2em">
        Games for everyone
      </Text>
      <Carousel />
    </Flex>
  );
};

export { Home };
