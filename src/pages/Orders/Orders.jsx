import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Orders = () => {
  // const { orderItems } = useSelector((state) => state.orders);
  // orderItems.map((orderItem) => console.log(orderItem));

  const { user, jwt } = useSelector((state) => state.auth);
  const [data, setData] = useState();

  useEffect(() => {
    const getOrders = async () => {
      const res = await fetch(
        `http://localhost:1337/api/users/${user.id}?populate[0]=orders`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setData(data.data);
    };
    getOrders();
  }, [user.id]);

  console.log('data:', data);

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
        {/* {orders.orderItems.map((orderItem) => (
          <Flex
            key={orderItem.data.id}
            w="25%"
            h="auto"
            justifyContent="space-between"
            alignItems="center"
            bgColor="#00000060"
            borderRadius="5px"
          >
            <Image
              src={orderItem.data.attributes.image.data.attributes.url}
              alt={orderItem.data.attributes.title}
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
                {orderItem.data.attributes.title}
              </Text>
              <Text fontSize="1.3em" color="#fff">
                Quantity: {orderItem.cartQuantity}
              </Text>
              <Text></Text>
            </Flex>
          </Flex>
        ))} */}
      </Flex>
    </Flex>
  );
};
