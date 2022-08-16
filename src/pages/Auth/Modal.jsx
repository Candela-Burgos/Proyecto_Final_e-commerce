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
  Tab,
  Tabs,
  TabList,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../../Hook/Zustand/useAuth';
import { useOpen } from '../../Hook/Zustand/useOpen';
import { Profile } from '../Profile/Profile';
import { Login } from './Login';
import { Register } from './Register';

export const ModalLogin = () => {
  const { isOpen, onOpen, onClose } = useOpen();
  const [click, setClick] = useState(true);
  const {
    auth: { user },
    logout,
  } = useAuth();

  return (
    <>
      {user ? (
        <Button onClick={logout}>Log Out</Button>
      ) : (
        <Button
          color="white"
          // mx="1.5em"
          onClick={onOpen}
          variant="ghost"
          colorScheme="whiteAlpha"
          _hover={{ bg: 'none' }}
          _focus={{ bg: 'none' }}
        >
          <FaUser />
        </Button>
      )}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
