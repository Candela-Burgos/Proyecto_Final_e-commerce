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
      <Heading
        color="#fff"
        fontSize={['2em', '2em', '3em', '3em', '5em', '5em']}
      >
        Welcome!
      </Heading>
      <Text color="#fff" fontSize={['1em', '1m', '1em', '1em', '2em', '2em']}>
        Games for everyone
      </Text>
      <Carousel />
    </Flex>
  );
};

export { Home };
