import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

export const Orders = () => {
  const cart = useSelector((state) => state.cart);

  cart.cartItems.map((cartItem) => console.log(cartItem));

  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={10}
      my="2em"
    >
      <Heading color="#fff">My orders</Heading>
      <Flex
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={10}
      >
        {cart.cartItems.map((cartItem) => (
          <Flex
            key={cartItem.data.id}
            w="25%"
            h="auto"
            justifyContent="space-between"
            alignItems="center"
            bgColor="#00000060"
            borderRadius="5px"
          >
            <Image
              src={cartItem.data.attributes.image.data.attributes.url}
              alt={cartItem.data.attributes.title}
              w="150px"
              borderRadius="5px"
            />
            <Flex
              w="100%"
              justifyContent="center"
              alignItems="start"
              flexDirection="column"
              ml="2em"
            >
              <Text fontSize="1.3em" color="#fff" fontWeight="bold">
                {cartItem.data.attributes.title}
              </Text>
              <Text fontSize="1.3em" color="#fff">
                Quantity: {cartItem.cartQuantity}
              </Text>
              <Text></Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
