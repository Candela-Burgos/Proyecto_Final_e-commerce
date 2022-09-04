import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModalLogin } from '../Auth/Modal';
import { FiSun, FiMoon, FiShoppingCart } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
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
      <Heading color="white" ml={[0, 0, '2em', '2em', '2em', '2em']}>
        KGS
      </Heading>
      {document.documentElement.scrollWidth <= 760 ? (
        <Flex>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              border="none"
            >
              <AiOutlineBars color="#fff" fontSize="1.5em" />
            </MenuButton>
            <MenuList>
              <Link as={NavLink} to="/" _hover={{ borderBottom: 'none' }}>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link
                as={NavLink}
                to="/products"
                _hover={{ borderBottom: 'none' }}
              >
                <MenuItem>Store</MenuItem>
              </Link>
              <MenuDivider />
              <MenuItem onClick={toggleColorMode}>
                {colorMode === 'light' ? <FiSun /> : <FiMoon />}
              </MenuItem>
              <Link
                ref={btnRef}
                colorScheme="teal"
                onClick={() => dispatch(onOpenCart())}
              >
                <MenuItem py="1em">
                  <FiShoppingCart />
                </MenuItem>

                <CartDrawer />
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="100%"
                  px="10px"
                  pb="3px"
                  w="1.3%"
                  h="12%"
                  position="absolute"
                  top={130}
                  right={175}
                  bgColor="red"
                >
                  {getTotalQuantity()}
                </Flex>
              </Link>
            </MenuList>
          </Menu>
          <ModalLogin />
        </Flex>
      ) : (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mr={[0, 0, '5em', '5em', '5em', '5em']}
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
              right={[78, 78, 158, 158, 158, 158]}
              bgColor="red"
            >
              {getTotalQuantity()}
            </Flex>
          </Link>
          <ModalLogin />
        </Box>
      )}
    </Flex>
  );
};
