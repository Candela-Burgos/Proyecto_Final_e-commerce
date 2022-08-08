import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Modal,
  ModalOverlay,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useOpen } from '../../Hook/Zustand/useOpen';
import { Profile } from '../Profile/Profile';
import { Login } from './Login';
import { Register } from './Register';

export const ModalLogin = ({ user, setUser }) => {
  const { isOpen, onOpen, onClose } = useOpen();
  const [click, setClick] = useState(true);
  return (
    <>
      <Button
        color="white"
        mx="1.5em"
        onClick={onOpen}
        variant="ghost"
        colorScheme="whiteAlpha"
        _hover={{ bg: 'none' }}
        _focus={{ bg: 'none' }}
      >
        <FaUser />
      </Button>
      {/* {user ? ( */}
      {/* <Menu>
        <MenuButton as={Button}>
          <FaUser />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu> */}
      {/* ) : ( */}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Button
                bgColor="transparent"
                _hover={{ bg: 'none' }}
                _focus={{ bg: 'none' }}
                onClick={() => setClick(true)}
              >
                Log In
              </Button>
              <Button
                bgColor="transparent"
                _hover={{ bg: 'none' }}
                _focus={{ bg: 'none' }}
                _active={{ borderBottom: '1px solid blue' }}
                onClick={() => setClick(false)}
              >
                Register
              </Button>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {click ? (
              <Login user={user} setUser={setUser} />
            ) : (
              <Register user={user} setUser={setUser} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* )} */}
    </>
  );
};
