import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  clearCart,
  decreaseQuantity,
  deleteItemCart,
  increaseQuantity,
} from '../../Redux/slice/cartSlice';

export const CartItem = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.cartItems.forEach((cartItem) => {
      totalQuantity += cartItem.cartQuantity;
      totalPrice += cartItem.data.attributes.price * cartItem.cartQuantity;
    });
    return { totalQuantity, totalPrice };
  };

  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt="4em"
    >
      <Heading color="#fff">My Cart</Heading>
      {cart.cartItems.length === 0 ? (
        <Flex
          w="100%"
          h="100%"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="column"
        >
          <Text color="#fff">Your cart is empty.</Text>
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
      ) : (
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <TableContainer
            color="#fff"
            bgColor="#00000070"
            w="70%"
            h="80%"
            maxH="70%"
            overflowY="auto"
            borderRadius="5px"
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="#ffffff90" textAlign="center">
                    Product
                  </Th>
                  <Th color="#fbb13c90" textAlign="center">
                    Price
                  </Th>
                  <Th color="#ffffff90" textAlign="center" w="1px">
                    Quantity
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart.cartItems?.map((cartItem) => (
                  <Tr key={cartItem.data.id}>
                    <Td textAlign="center">
                      <Flex
                        w="100%"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Image
                          src={
                            cartItem.data.attributes.image.data.attributes.url
                          }
                          alt={cartItem.data.attributes.title}
                          w="10%"
                          borderRadius="3px"
                        />
                        <Flex
                          justifyContent="center"
                          alignItems="flex-start"
                          flexDirection="column"
                          ml="1em"
                        >
                          <Text>{cartItem.data.attributes.title}</Text>
                          <Text>Stock: {cartItem.data.attributes.stock}</Text>
                          <Button
                            color="red"
                            p="0px"
                            bgColor="transparent"
                            _hover={{ bgColor: 'transparent' }}
                            _focus={{ bgColor: 'transparent' }}
                            onClick={() =>
                              dispatch(deleteItemCart(cartItem.data.id))
                            }
                          >
                            Remove
                          </Button>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td textAlign="center" color="#fbb13c">
                      {cartItem.data.attributes.price}
                    </Td>
                    <Td textAlign="center">
                      <Flex
                        justifyContent="flex-start"
                        alignItems="center"
                        border="1px solid #fff"
                        borderRadius="5px"
                      >
                        <Button
                          color="#fff"
                          bgColor="transparent"
                          _hover={{ bgColor: 'transparent' }}
                          _focus={{ bgColor: 'transparent' }}
                          isDisabled={cartItem.cartQuantity === 1}
                          onClick={() =>
                            dispatch(decreaseQuantity(cartItem.data.id))
                          }
                        >
                          -
                        </Button>
                        {cartItem.cartQuantity}
                        <Button
                          color="#fff"
                          bgColor="transparent"
                          _hover={{ bgColor: 'transparent' }}
                          _focus={{ bgColor: 'transparent' }}
                          isDisabled={
                            cartItem.cartQuantity ===
                            cartItem.data.attributes.stock
                          }
                          onClick={() =>
                            dispatch(increaseQuantity(cartItem.data.id))
                          }
                        >
                          +
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex
            w="60%"
            h="70%"
            justifyContent="flex-start"
            alignItems="center"
            flexDirection="column"
            ml="2em"
          >
            <Flex
              w="100%"
              h="60%"
              justifyContent="flex-start"
              alignItems="flex-start"
              flexDirection="column"
              bgColor="#ffffff60"
              borderRadius="5px"
            >
              <Text
                color="#000"
                fontSize="2em"
                textAlign="left"
                m="1em"
                fontWeight="bold"
              >
                Order
              </Text>
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="start"
                flexDirection="column"
                gap={5}
              >
                <Text color="#000" fontSize="1.3em" textAlign="center" ml="2em">
                  <strong>Shipping:</strong> For the moment, we do not do
                  deliveries {":'("}
                </Text>
                <Text color="#000" fontSize="1.3em" textAlign="center" ml="2em">
                  <strong>Total quantity:</strong> {getTotal().totalQuantity}
                </Text>
                <Text color="#000" fontSize="1.3em" textAlign="center" ml="2em">
                  <strong>Total price:</strong> ${getTotal().totalPrice}
                </Text>
                <Flex
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  mt="1em"
                >
                  <Button fontSize="1.3em" w="60%">
                    Check out
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              w="100%"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              gap={5}
            >
              <Link as={NavLink} to="/products" mt="2em">
                <Button>Continue shopping</Button>
              </Link>
              <Button onClick={() => dispatch(clearCart())} mt="2em">
                Clear cart
              </Button>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
