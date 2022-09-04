import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

export const Orders = () => {
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
      setData(data);
    };
    getOrders();
  }, [user.id]);

  return (
    <>
      {data && data.orders.length === 0 ? (
        <Flex
          w="100%"
          h="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={10}
          my="2em"
        >
          <Heading color="#fff" mt="1em">
            My orders
          </Heading>
          <Flex
            w="100%"
            h="100%"
            justifyContent="space-evenly"
            alignItems="center"
            flexWrap="wrap"
            flexDirection="column"
            mb="3em"
          >
            <Text
              color="#fff"
              fontSize={['1em', '1.3em', '1.3em', '1.5em', '1.5em', '1.5em']}
            >
              No orders yet.
            </Text>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Link as={NavLink} to="/products">
                <Button>Return to the store</Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex
          w="100%"
          h="100%"
          minHeight="100vh"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
          gap={10}
          my="2em"
        >
          <Heading color="#fff" mt="1em">
            My orders
          </Heading>
          <Flex
            w="100%"
            h="100%"
            justifyContent="space-around"
            alignItems="center"
            flexWrap="wrap"
            mb="3em"
          >
            {data &&
              data.orders.map((order) =>
                order.Item.map((item) => (
                  <Flex
                    key={item.data.id}
                    w={['300px', '200px', '300px', '300px', '500px', '500px']}
                    h="auto"
                    justifyContent="space-between"
                    alignItems="center"
                    bgColor="#00000060"
                    borderRadius="5px"
                    m=".5em"
                  >
                    <Image
                      src={item.data.attributes.image.data.attributes.url}
                      alt={item.data.attributes.title}
                      w={['40px', '40px', '50px', '50px', '70px', '70px']}
                      borderRadius="5px"
                    />
                    <Flex
                      w="100%"
                      justifyContent="center"
                      alignItems="start"
                      flexDirection="column"
                      ml="1em"
                    >
                      <Text
                        fontSize={[
                          '1em',
                          '1em',
                          '1em',
                          '1em',
                          '1.3em',
                          '1.3em',
                        ]}
                        color="#fff"
                        fontWeight="bold"
                      >
                        {item.data.attributes.title}
                      </Text>
                      <Text
                        fontSize={[
                          '1em',
                          '1em',
                          '1em',
                          '1em',
                          '1.3em',
                          '1.3em',
                        ]}
                        color="#fff"
                      >
                        Quantity: {item.cartQuantity}
                      </Text>
                    </Flex>
                  </Flex>
                ))
              )}
          </Flex>
        </Flex>
      )}
    </>
  );
};
