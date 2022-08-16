import { Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';

export const Error404 = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgColor="#000"
    >
      <Image
        src="https://www.trecebits.com/wp-content/uploads/2020/11/Error-404.jpg"
        alt="Error 404, page not found"
      />
    </Flex>
  );
};
