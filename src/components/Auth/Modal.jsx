import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Modal,
  ModalOverlay,
  Tab,
  Tabs,
  TabList,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../Redux/slice/authSlice';
import { onCloseModal, onOpenModal } from '../../Redux/slice/openModalSlice';
import { Login } from './Login';
import { Register } from './Register';
import { ImExit } from 'react-icons/im';

export const ModalLogin = () => {
  const [click, setClick] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const openModal = useSelector((state) => state.openModal);
  const toast = useToast();
  const dispatch = useDispatch();

  return (
    <>
      {user ? (
        <Menu>
          <MenuButton
            mx="1em"
            color="white"
            variant="ghost"
            colorScheme="whiteAlpha"
            _hover={{ bg: 'none' }}
            _focus={{ bg: 'none' }}
          >
            <FaUser />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link
                as={NavLink}
                to="/profile"
                w="100%"
                _hover={{ borderBottom: 'none' }}
              >
                {user.username}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                as={NavLink}
                to="/orders"
                w="100%"
                _hover={{ borderBottom: 'none' }}
              >
                My orders
              </Link>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onClick={() => dispatch(logout())}
              color="red"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              Log out <ImExit fontSize="1.3em" />
            </MenuItem>
            {/* {!logout &&
              toast({
                title: 'Good bye',
                status: 'information',
                duration: 3000,
                isClosable: true,
              })} */}
          </MenuList>
        </Menu>
      ) : (
        <Button
          color="white"
          // mx="1.5em"
          onClick={() => dispatch(onOpenModal())}
          variant="ghost"
          colorScheme="whiteAlpha"
          _hover={{ bg: 'none' }}
          _focus={{ bg: 'none' }}
        >
          <FaUser />
        </Button>
      )}
      <Modal
        isCentered
        isOpen={openModal}
        onClose={() => dispatch(onCloseModal())}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Tabs isFitted variant="enclosed" pt="1.2em">
              <TabList>
                <Tab onClick={() => setClick(true)}>Log In</Tab>
                <Tab onClick={() => setClick(false)}>Register</Tab>
              </TabList>
            </Tabs>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{click ? <Login /> : <Register />}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
