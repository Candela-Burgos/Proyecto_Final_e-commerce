import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Link,
  Text,
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
import { onCloseCart } from '../../Redux/slice/openCartSlice';

export const CartDrawer = () => {
  const openCart = useSelector((state) => state.openCart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const btnRef = React.useRef();

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
    <Drawer
      isOpen={openCart}
      placement="right"
      onClose={() => dispatch(onCloseCart())}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent bgColor="#000000">
        <DrawerCloseButton />
        <DrawerHeader color="#fff">My cart</DrawerHeader>
        <DrawerBody>
          {cart.cartItems.length === 0 ? (
            <Flex
              w="100%"
              justifyContent="center"
              alignItems="center"
              wrap="wrap"
              gap={5}
            >
              <Text mt="1em" color="#fff">
                Your cart is empty.
              </Text>
              <Link
                as={NavLink}
                to="/products"
                //   onClick={() => console.log(dispatch(onCloseCart()))}
              >
                {/* onClick={() => dispatch(onCloseCart())} */}
                <Button>Return to the store</Button>
              </Link>
            </Flex>
          ) : (
            <Flex
              w="100%"
              justifyContent="center"
              alignItems="center"
              wrap="wrap"
              gap={5}
            >
              {cart.cartItems?.map((cartItem) => (
                <Box
                  key={cartItem.data.id}
                  display="flex"
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Image
                    src={cartItem.data.attributes.image.data.attributes.url}
                    alt={cartItem.data.attributes.title}
                    w="40px"
                    borderRadius="2px"
                  />
                  <Box
                    key={cartItem.data.id}
                    display="flex"
                    w="90%"
                    justifyContent="center"
                    alignItems="flex-start"
                    flexDirection="column"
                    ml="1em"
                  >
                    <Text textAlign="left" color="#fff" fontSize=".8em">
                      {cartItem.data.attributes.title}
                    </Text>
                    <Text textAlign="center" color="#fff">
                      ${cartItem.data.attributes.price}
                    </Text>
                    <Button
                      color="red"
                      p="0px"
                      bgColor="transparent"
                      _hover={{ bgColor: 'transparent' }}
                      _focus={{ bgColor: 'transparent' }}
                      onClick={() => dispatch(deleteItemCart(cartItem.data.id))}
                    >
                      Remove
                    </Button>
                  </Box>
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
                    <Text color="#fff">{cartItem.cartQuantity}</Text>
                    <Button
                      color="#fff"
                      bgColor="transparent"
                      _hover={{ bgColor: 'transparent' }}
                      _focus={{ bgColor: 'transparent' }}
                      isDisabled={
                        cartItem.cartQuantity === cartItem.data.attributes.stock
                      }
                      onClick={() =>
                        dispatch(increaseQuantity(cartItem.data.id))
                      }
                    >
                      +
                    </Button>
                  </Flex>
                </Box>
              ))}
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={5}
              >
                <Button onClick={() => dispatch(clearCart())} w="100%">
                  Clear cart
                </Button>
                <Flex
                  w="100%"
                  justifyContent="space-around"
                  alignItems="center"
                  flexDirection="row"
                  gap={5}
                >
                  <Text color="#fff" fontSize="1.3em">
                    Total:
                  </Text>
                  <Text color="#fbb13c" fontSize="1.3em">
                    {getTotal().totalPrice}
                  </Text>
                </Flex>
                <Link as={NavLink} to="/cart" w="100%">
                  <Button w="100%" colorScheme="purple">
                    Go to cart
                  </Button>
                </Link>
              </Flex>
            </Flex>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
