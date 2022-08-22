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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Hook/Redux/slice/authSlice';
import {
  onCloseModal,
  onOpenModal,
} from '../../Hook/Redux/slice/openModalSlice';
import { Login } from './Login';
import { Register } from './Register';

export const ModalLogin = () => {
  const [click, setClick] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const openModal = useSelector((state) => state.openModal);
  const dispatch = useDispatch();

  return (
    <>
      {user ? (
        <Button onClick={() => dispatch(logout())}>Log Out</Button>
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
