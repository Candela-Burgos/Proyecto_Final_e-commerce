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
import { deleteItemCart } from '../../Hook/Redux/slice/cartSlice';
import { onCloseCart } from '../../Hook/Redux/slice/openCartSlice';

export const CartDrawer = () => {
  const openCart = useSelector((state) => state.openCart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const btnRef = React.useRef();

  return (
    <Drawer
      isOpen={openCart}
      placement="right"
      onClose={() => dispatch(onCloseCart())}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>My cart</DrawerHeader>
        <DrawerBody>
          {cart.cartItems.length === 0 ? (
            <Flex
              w="100%"
              justifyContent="center"
              alignItems="center"
              wrap="wrap"
              gap={5}
            >
              <Text mt="1em">Your cart is empty.</Text>
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
                    w="40%"
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
                    <Text textAlign="center">
                      {cartItem.data.attributes.title}
                    </Text>
                    <Text textAlign="center">
                      ${cartItem.data.attributes.price}
                    </Text>
                    <Text textAlign="center">
                      Quantity: {cartItem.cartQuantity}
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
                  {/* <Input type="number" value={cartItem.cartQuantity} /> */}
                </Box>
              ))}
              <Link as={NavLink} to="/cart">
                <Button>Go to cart</Button>
              </Link>
            </Flex>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
