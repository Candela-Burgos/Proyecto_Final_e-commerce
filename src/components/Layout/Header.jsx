import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModalLogin } from '../Auth/Modal';
import { FiSun, FiMoon, FiShoppingCart } from 'react-icons/fi';
import { onOpenCart } from '../../Redux/slice/openCartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CartDrawer } from '../Cart/CartDrawer';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const cart = useSelector((state) => state.cart);
  const btnRef = React.useRef();
  const dispatch = useDispatch();

  const getTotalQuantity = () => {
    let acc = 0;
    cart.cartItems.forEach((cartItem) => {
      acc += cartItem.cartQuantity;
    });
    return acc;
  };

  return (
    <Flex
      as="nav"
      bgColor="#00000070"
      w="100%"
      p={8}
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      zIndex={2}
    >
      <Heading color="white" ml="2em">
        KGS
      </Heading>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mr="5em"
        w="auto"
      >
        <Link as={NavLink} to="/" color="white" mr="1.5em">
          Home
        </Link>
        <Link as={NavLink} to="/products" color="white" mx="1.5em">
          Store
        </Link>
        <Text color="#fff">|</Text>
        <Button
          onClick={toggleColorMode}
          color="white"
          ml="1em"
          bgColor="transparent"
          _hover={{ bgColor: 'transparent' }}
          _focus={{ bgColor: 'transparent' }}
        >
          {colorMode === 'light' ? <FiSun /> : <FiMoon />}
        </Button>
        <Link
          color="white"
          mx="1em"
          ref={btnRef}
          colorScheme="teal"
          onClick={() => dispatch(onOpenCart())}
        >
          <FiShoppingCart />
          <CartDrawer />
          <Flex
            justifyContent="center"
            alignItems="center"
            borderRadius="100%"
            px="10px"
            pb="3px"
            w="1.3%"
            h="18%"
            position="absolute"
            top={8}
            right={158}
            bgColor="red"
          >
            {getTotalQuantity()}
          </Flex>
        </Link>
        <ModalLogin />
      </Box>
    </Flex>
  );
};
