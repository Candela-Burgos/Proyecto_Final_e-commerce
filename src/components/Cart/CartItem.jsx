import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
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
} from '../../Hook/Redux/slice/cartSlice';

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
    >
      {/* <Flex
        w="100%"
        // h="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        // mt="10em"
        // mb="3em"
      > */}
      <Heading color="#fff">My Cart</Heading>
      {/* </Flex> */}
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
        <>
          <TableContainer
            color="#fff"
            w="70%"
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
          >
            <Table variant="simple" overflowX="auto">
              <Thead>
                <Tr>
                  <Th color="#ffffff90" textAlign="center">
                    Product
                  </Th>
                  <Th color="#ffffff90" textAlign="center">
                    Price
                  </Th>
                  <Th color="#ffffff90" textAlign="center" w="1px">
                    Quantity
                  </Th>
                  <Th color="#ffffff90" textAlign="center">
                    Total
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart.cartItems?.map((cartItem) => (
                  <Tr key={cartItem.data.id}>
                    <Td textAlign="center">
                      <Flex justifyContent="flex-start" alignItems="center">
                        <Image
                          src={
                            cartItem.data.attributes.image.data.attributes.url
                          }
                          alt={cartItem.data.attributes.title}
                          w="10%"
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
                    <Td textAlign="center">{cartItem.data.attributes.price}</Td>
                    <Td textAlign="center">
                      <Flex
                        // w="100%"
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
                    <Td textAlign="center">
                      total: {cartItem.data.attributes.price}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Button onClick={() => dispatch(clearCart())} mt="2em">
            Clear cart
          </Button>
          {/* <Text>Total quantity: {getTotal().totalQuantity}</Text>
          <Text>Total price: {getTotal().totalPrice}</Text> */}
          <Text>
            total ({getTotal().totalQuantity}) :{' '}
            <strong>${getTotal().totalPrice}</strong>
          </Text>
        </>
      )}
    </Flex>
  );
};
